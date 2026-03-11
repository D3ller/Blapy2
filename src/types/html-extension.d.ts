import { Blapy } from '../core/Blapy';
import { BlapyOptions } from './types';

declare global {
  interface HTMLElement {
    Blapy(options?: BlapyOptions): Blapy;
    _blapyInstance?: Blapy;
  }
}