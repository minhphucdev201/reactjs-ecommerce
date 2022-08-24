import { Box, FormHelperText, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { RemoveCircleOutline } from '@material-ui/icons';
import { AddCircleOutline } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignContent: 'center',
    maxWidth: '200px',
  },
}));
function QuantityField(props) {
  const { form, name, label } = props;
  const { control, setValue } = form;
  const classes = useStyles();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, isTouched, error },
        }) => (
          <>
            <FormControl fullWidth margin="normal" variant="outlined" size="small">
              <Typography>{label}</Typography>
              <Box className={classes.box}>
                <IconButton
                  onClick={() =>
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                  }
                >
                  <RemoveCircleOutline />
                </IconButton>
                <OutlinedInput
                  id={name}
                  type="number"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                />
                <IconButton
                  onClick={() =>
                    setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                  }
                >
                  <AddCircleOutline />
                </IconButton>
              </Box>
            </FormControl>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default QuantityField;
