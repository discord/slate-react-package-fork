import { RefObject } from 'react';
import { CreateAndroidInputManagerOptions } from './android-input-manager';
declare type UseAndroidInputManagerOptions = {
    node: RefObject<HTMLElement>;
} & Omit<CreateAndroidInputManagerOptions, 'editor' | 'onUserInput' | 'receivedUserInput'>;
export declare function useAndroidInputManager({ node, ...options }: UseAndroidInputManagerOptions): import("./android-input-manager").AndroidInputManager | null;
export {};
//# sourceMappingURL=use-android-input-manager.d.ts.map