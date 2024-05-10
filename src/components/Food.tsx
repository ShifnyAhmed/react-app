
function Food() {

    const food = ['Apple', 'Orange', 'Banana'];

  return (
    <ul>
      <li>{food[0]}</li>
      <li>{food[1]}</li>
      <li>{food[2].toUpperCase()}</li>
    </ul>
  )
}

export default Food
