
export interface DatePickerPropsType {
  label?: string;
  name?: string;
  control: any;
  error?: any;
  rules?: any;
  setError?: any;
  clearErrors?: any;
  views?: TDatePickerViewStates[];
  disableFuture?: boolean;
  minDate?: any,
  setIsValid?: any,
  isValid?: boolean
  setIsValidDeath?: any,
  isValidDeath?: boolean
}

export  type TDatePickerViewStates="year" | "month" | "day"; 