import { Component } from 'react';
import { listOfAlbums } from 'service/listOfAlbums';

class ListOfAlbumsn extends Component {
  state = {
    list: [],
    quantityOfItems: 3,
  };

  getAlbum = async () => {
    await listOfAlbums().then(array => {
      const listNumber = this.state.list.length;
      const arrayForList = array.slice(listNumber, listNumber + this.state.quantityOfItems);
      this.setState(prevState => ({
        list: [...prevState.list, ...arrayForList],
      }));
    });
  };

  getNumberQuantity = event => {
    this.setState({
      quantityOfItems: Number(event.target.value),
    });
  };

  render() {
    return (
      <>
        <div>
          {' '}
          <button type="button" onClick={this.getAlbum}>
            {' '}
            Get more{' '}
          </button>
          <SelectQuantity onChange={this.getNumberQuantity} />
        </div>
        <div>
          {' '}
          <ul>
            {this.state.list.map(elem => (
              <ListItem title={elem.title} key={elem.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

const ListItem = props => {
  const { title, id } = props;
  return (
    <li>
      <p>{title}</p> <span>{id}</span>
    </li>
  );
};

const SelectQuantity = props => {
  return (
    <>
      <select name="number" onChange={props.onChange}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </>
  );
};

export default ListOfAlbumsn;
