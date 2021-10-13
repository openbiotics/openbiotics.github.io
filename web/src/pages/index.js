import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/layout.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <h1>openbiotics</h1>
    <p>
      <i>open source hardware for lab automation.</i>
    </p>

    <ul>
      <li>
        <Link to="/pcr">polymerase chain reaction</Link>
      </li>
      <li>
        <Link to="/insulin">open source insulin</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
