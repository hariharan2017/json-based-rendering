interface ValidationObj {
  min?: number,
  max?: number,
  required?: boolean,
  pattern?: string,
  message: string
}

export const formValidator = (validationArray: ValidationObj[], data: string) => {
  const errors: string[] = [];
  validationArray.forEach((val) => {
    if("required" in val) {
      if(!data) errors.push(val.message);
    }
    if("min" in val) {
      if(data?.length < (val.min || 0)) errors.push(val.message);
    }
    if("max" in val) {
      if(data?.length > (val.max || 0)) errors.push(val.message);
    }
    if("pattern" in val) {
      if(!data?.match(val.pattern || "")) errors.push(val.message);
    }
  });
  return errors;
}