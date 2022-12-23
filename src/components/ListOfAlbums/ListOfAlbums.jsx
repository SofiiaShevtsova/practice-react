import { useCallback, useEffect, useMemo, useState } from 'react';
import { listOfAlbums } from 'service/listOfAlbums';

const ListOfAlbumsn = () => {

  const [list, setList] = useState([])
  const [quantity, setQuantity] = useState(3)

  const listNumber = useMemo(()=>{return list.length}, [list]) ;

  const getAlbum = useCallback(async () => {
    await listOfAlbums().then(array => {
             const arrayForList = array.slice(listNumber, listNumber + quantity)
      setList(prevList => [...prevList, ...arrayForList]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])

  useEffect(() => {
    getAlbum()
  }, [getAlbum])



  const getNumberQuantity = event => {
    setQuantity(Number(event.target.value));
  };

    return (
      <>
        <div>
          <SelectQuantity onChange={getNumberQuantity} />
        </div>
        <div>
          <ol>
            {list.map(elem => (
              <ListItem title={elem.title} key={elem.id} />
            ))}
          </ol>
        </div>
      </>
    );
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
