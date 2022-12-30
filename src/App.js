import "./styles.css";

function App() {
  const object = {
    data: [
      {
        id: "63ad33c69acfa205d354256b",
        material: "1000000000",
        material_name: "SAMPEL",
        plant: "K111",
        type: "rm",
        current_price: 7718,
        price: []
      },
      {
        id: "63ad33c69acfa205d354256a",
        material: "1000000000",
        material_name: "SAMPEL",
        plant: "K109",
        type: "rm",
        current_price: 7718,
        price: []
      },
      {
        id: "63ad33c69acfa205d3542565",
        material: "1000000000",
        material_name: "SAMPEL",
        plant: "K103",
        type: "rm",
        current_price: 37259,
        price: [
          {
            date: "januari",
            price: 37258.978184562315
          },
          {
            date: "februari",
            price: 37258.978184562315
          },
          {
            date: "maret",
            price: 37258.978184562315
          },
          {
            date: "april",
            price: 37258.978184562315
          },
          {
            date: "mei",
            price: 37258.978184562315
          },
          {
            date: "juni",
            price: 37258.978184562315
          },
          {
            date: "juli",
            price: 37258.978184562315
          },
          {
            date: "agustus",
            price: 37258.978184562315
          },
          {
            date: "september",
            price: 37258.978184562315
          },
          {
            date: "oktober",
            price: 37258.978184562315
          },
          {
            date: "november",
            price: 37258.978184562315
          },
          {
            date: "desember",
            price: 37258.978184562315
          }
        ]
      }
    ]
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th rowspan="2">material</th>
          <th rowspan="2">material_name</th>
          <th rowspan="2">plant</th>
          <th rowspan="2">type</th>
          <th rowspan="2">current_price</th>
          <th colspan="12">Price</th>
        </tr>
        <tr>
          <td>januari</td>
          <td>februari</td>
          <td>maret</td>
          <td>april</td>
          <td>mei</td>
          <td>juni</td>
          <td>juli</td>
          <td>agustus</td>
          <td>september</td>
          <td>oktober</td>
          <td>november</td>
          <td>desember</td>
        </tr>
        {object.data.map((item) => {
          return (
            <tr>
              <td>{item.material}</td>
              <td>{item.material_name}</td>
              <td>{item.plant}</td>
              <td>{item.current_price}</td>
              <td>{item.material_name}</td>
              {item.price.map((obj) => {
                return <td>{obj.price}</td>;
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
