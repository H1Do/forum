import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0,
        });

        observer.observe(triggerElement);

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
