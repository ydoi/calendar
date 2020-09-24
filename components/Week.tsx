import styles from "./Week.module.css"

export default function Week() {
  const today = new Date()
  let weekDates = [...Array(7).keys()].map((day, index) => {
    return today.getDate() - today.getDay() + index
  })

  return (
    <div className={styles['Week-table']}>
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          {weekDates.map((date) => {
            return <td>{date}</td>
          })}
        </tr>
        <tr>
          <td>あああ</td>
          <td>あああ</td>
          <td>あああ</td>
          <td>あああ</td>
          <td>あああ</td>
          <td>あああ</td>
          <td>あああ</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}