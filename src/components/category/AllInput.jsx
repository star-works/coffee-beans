import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export const RadioInputs = (props) => {
  const { setValue, options, value } = props;

  const onchangeHandler = (obj) => {
    if (value === obj) {
      setValue(obj);
    } else {
      setValue(obj);
    }
  };

  return (
    <>
      <RadioGroup defaultValue="comfortable" className={`gap-0`}>
        {options.map((obj, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 py-[4px]"
            onClick={() => onchangeHandler(obj)}
          >
            <RadioGroupItem
              checked={obj === value}
              id={obj}
              className="cursor-pointer"
            />
            <Label
              className="text-base text-lightBlack font-normal cursor-pointer"
              htmlFor={obj}
            >
              {obj}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </>
  );
};
export const CheckboxInputs = (props) => {
  const { setValue, options, value } = props;

  const onchangeHandler = (obj) => {
    if (value.includes(obj)) {
      const newValue = value.filter((v) => v != obj);
      setValue(newValue);
    } else {
      setValue([...value, obj]);
    }
  };
  return (
    <>
      {options.map((obj, i) => (
        <div
          className="flex items-center space-x-2 py-2"
          key={i}
          onClick={() => onchangeHandler(obj)}
        >
          <Checkbox checked={value.includes(obj)} className="cursor-pointer" />
          <label className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
            {obj}
          </label>
        </div>
      ))}
    </>
  );
};
