import React, { PropTypes, Component } from 'react';

import '../../styles/table.scss';


class Table extends Component {

  createHeadings = () => {
    // creates an array of th components based on the keys in the first object
    return Object.keys(this.props.tableValues[0]).map((value, index) => {
      return <th key={index} className="border">{value}</th>;
    });
  }

  createRows = () => {
    // creates an array of rows and cells
    return this.props.tableValues.map((row, index) => {
      const cells = this.createCells(row);
      return (
        <tr
          key={index}
          className="border"
        >
        {cells}
        </tr>
      );
    });
  }

  createCells = (row) => {
    // takes in a row object and returns an array of cells
    return Object.keys(row).map((key, index) => {
      return (
        <td
          key={index}
          className="border"
        >
          {row[key]}
        </td>);
    });
  }

  render() {
    const headings = this.createHeadings();
    const contents = this.createRows();
    return (
      <table className="border table">
        <thead className="heading">
          <tr>{headings}</tr>
        </thead>
        <tbody>
          {contents}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  tableValues: PropTypes.array.isRequired,
};

export default Table;
