declare const top: 'top';
declare const bottom: 'bottom';
declare const right: 'right';
declare const left: 'left';
declare const auto: 'auto';
declare type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
declare type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
declare type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
declare type Placement = AutoPlacement | BasePlacement | VariationPlacement;
declare type OptionsGeneric<TModifier> = {
  placement: Placement;
  modifiers: Array<TModifier>;
  strategy: any;
  onFirstUpdate?: (arg0: Partial<any>) => void;
};

declare type SetAction<S> = S | ((prev: S) => S);

export interface PopperInstance {
  state: any;
  destroy: () => void;
  forceUpdate: () => void;
  update: () => Promise<Partial<any>>;
  setOptions: (setOptionsAction: SetAction<Partial<OptionsGeneric<any>>>) => Promise<Partial<any>>;
}
