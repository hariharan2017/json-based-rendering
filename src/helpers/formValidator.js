export const formValidator = (validationArray, data) => {
  const errors = [];
  validationArray.forEach((val) => {
    if("required" in val) {
      if(!data) errors.push(val.message);
    }
    if("min" in val) {
      if(data?.length < val.min) errors.push(val.message);
    }
    if("max" in val) {
      if(data?.length > val.max) errors.push(val.message);
    }
    if("pattern" in val) {
      if(!data?.match(val.pattern)) errors.push(val.message);
    }
  });
  return errors;
}