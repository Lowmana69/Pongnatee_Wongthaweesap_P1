import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const types = [
    {
      value: 1,
      label: 'Lodging',
    },
    {
      value: 2,
      label: 'Travel',
    },
    {
      value: 3,
      label: 'Beverage/Meals',
    },
    {
      value: 4,
      label: 'Other',
    },
  ];
  

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export const TypeComponent: React.FC = () => {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-type"
          select
          label="Type"
          value={type}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select the Reimbursement Type"
          variant="outlined"
        >
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
};
