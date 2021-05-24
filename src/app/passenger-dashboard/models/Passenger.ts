import { Children } from './Children';

export interface Passenger {
    id: Number,
    name: String,
    checkedIn: boolean,
    checkedDate?: number,
    baggage?: string
    // same as checkedDate: number | null;s
    // children?: Children[]
  }