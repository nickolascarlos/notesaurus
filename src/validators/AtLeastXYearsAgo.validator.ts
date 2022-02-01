import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'atLeastXYearsAgo', async: false })
export default class AtLeastXYearsAgo implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const xYearsAgo: Date = new Date(
      new Date().setFullYear(new Date().getFullYear() - args.constraints[0]),
    );
    const birthday: Date = new Date(text);
    return birthday < xYearsAgo;
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `You must be at least ${args.constraints} years old`;
  }
}
