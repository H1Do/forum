import { SVGProps, VFC } from 'react';

export interface SibebarItemType {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
