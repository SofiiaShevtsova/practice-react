const Contacts = props => {
    return (
        <>
            <h3 className="big"> Контакти </h3>
            <ul>
              <li>
                <p className="contakt">C:</p>
                <a href="tel:+000000000" className="tel">
                  +000-000-000
                </a>
              </li>
              <li>
                <p>
                  <span className="contakt">E:</span>
                  <a href="mailto:sofika2404@gmail.com" className="tel">
                    sofika2404@gmail.com
                  </a>{' '}
                </p>
              </li>
              <li>
                {' '}
                <p> Адреса: 00 000, м. Невідомо, вул. Невідомо 0/0 </p>
              </li>{' '}
            </ul>
          </>
    )
}

export default Contacts