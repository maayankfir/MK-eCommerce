import React from 'react';
import { Grid, Input} from 'semantic-ui-react'

const Filter = (props) => {

  return (
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Input textAlign='center' size='big'
         icon='search' placeholder='Search By Product' onChange={(e) => props.handleSearchChange(e)}
        value={props.searchInput} />
      </Grid>
  )
}

export default Filter;
