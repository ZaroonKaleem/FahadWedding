import { Injectable } from '@angular/core';

type TildaWindow = Window & {
  t_onReady: (fn: () => void) => void;
  t_onFuncLoad: (name: string, ok: () => void, time?: number) => void;
  t_loadJsFile?: (src: string, cb: () => void) => void;
  [fn: string]: unknown;
};

/** Thin wrapper around the Tilda runtime (public/static.tildacdn.net) that the page's blocks rely on. */
@Injectable({ providedIn: 'root' })
export class TildaService {
  private get w(): TildaWindow {
    return window as unknown as TildaWindow;
  }

  private call(fn: string, ...args: string[]): void {
    this.w.t_onReady(() =>
      this.w.t_onFuncLoad(fn, () => (this.w[fn] as (...a: string[]) => void)(...args)),
    );
  }

  /** Initialises a Tilda "zero block" (absolute-positioned, responsive artboard). */
  zeroBlock(recId: string): void {
    this.call('t396_init', recId);
  }

  popup(recId: string): void {
    this.call('t702_initPopup', recId);
  }

  radioButtons(recId: string, fieldId: string): void {
    this.w.t_onReady(() =>
      this.w.t_onFuncLoad('t_loadJsFile', () =>
        this.w.t_loadJsFile!('static.tildacdn.net/js/tilda-variant-select-1.0.min.js', () =>
          this.w.t_onFuncLoad('t_input_radiobuttons_init', () => {
            try {
              (this.w['t_input_radiobuttons_init'] as (a: string, b: string) => void)(recId, fieldId);
            } catch (e) {
              console.log(e);
            }
          }),
        ),
      ),
    );
  }

  /** Runs a plain script (e.g. the overlay / countdown logic) once its section is in the DOM. */
  loadScript(src: string): void {
    const el = document.createElement('script');
    el.src = src;
    document.body.appendChild(el);
  }
}
