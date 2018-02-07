export interface IEmployee {
  id: number;
  name: string;
  pay: number;
  job: string;
  age: number;
  state: string;

  getId?: () => void;
  getName?: () => void;
  getPay?: (x?) => void;
  getAge?: () => void;
  getState?: () => void;
  getJob?: () => void;
  createEmployee?: () => void;
}
