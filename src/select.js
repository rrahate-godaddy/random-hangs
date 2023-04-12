import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectList(props) {
    return(

        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Rounds</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.value}
            label="Rounds"
            onChange={props.handleChange}
            >
                {(Object.keys(props.itemz).length != 0) &&
                    props.itemz.map((item, ind) => 
                    
                        <MenuItem value={ind+1}>
                            Round {ind+1}
                        </MenuItem>
                        
                    )
                }
            </Select>
        
        </FormControl>

    )
}

export default SelectList
