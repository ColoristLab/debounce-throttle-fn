export interface DebounceOptions {
  /**
   * 是否在首次调用时立即执行。
   * @default false
   */
  leading?: boolean;

  /**
   * 是否在等待结束后执行最后一次调用。
   * @default true
   */
  trailing?: boolean;

  /**
   * 最大等待时间（毫秒）。
   */
  maxWait?: number;
}

export interface ThrottleOptions {
  /**
   * 是否在首次调用时立即执行。
   * @default true
   */
  leading?: boolean;

  /**
   * 是否在等待结束后执行最后一次调用。
   * @default true
   */
  trailing?: boolean;
}

export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;

  /**
   * 取消当前等待中的调用。
   */
  cancel(): void;

  /**
   * 立即执行当前等待中的调用。
   */
  flush(): ReturnType<T> | undefined;
}

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait?: number,
  options?: DebounceOptions,
): DebouncedFunction<T>;

export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  wait: number,
  options?: ThrottleOptions,
): DebouncedFunction<T>;
