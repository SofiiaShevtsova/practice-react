import StyledList from './Styled';

const { SiteBarTitleStyle, SiteBarListStyle, SvgStyle, ContactsStyle } = StyledList;

const Contacts = props => {
  return (
    <div>
      <SiteBarTitleStyle> Контакти </SiteBarTitleStyle>
      <SiteBarListStyle>
        <li>
          <ContactsStyle href="mailto:sofika2404@mail.com">
            <SvgStyle width="20" height="15" viewBox="0 0 20 15">
              <path d="M15 3H3c-.825 0-1.492.675-1.492 1.5l-.008 9c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5Zm-.3 3.188L9.398 9.502a.759.759 0 0 1-.796 0L3.3 6.188a.637.637 0 1 1 .675-1.08L9 8.25l5.025-3.143a.637.637 0 1 1 .675 1.08Z" />
            </SvgStyle>
            sofika2404@mail.com{' '}
          </ContactsStyle>
        </li>

        <li>
          <ContactsStyle href="tel:+48507755251">
            <SvgStyle width="18" height="16" viewBox="0 0 10 16">
              <path d="m11.996 9.123-1.838-.21a1.44 1.44 0 0 0-1.187.412l-1.332 1.332a10.888 10.888 0 0 1-4.769-4.77L4.21 4.55a1.44 1.44 0 0 0 .412-1.187l-.21-1.824a1.448 1.448 0 0 0-1.44-1.28H1.72C.902.257.222.937.272 1.754c.384 6.18 5.327 11.116 11.5 11.5.817.05 1.498-.63 1.498-1.448v-1.252a1.434 1.434 0 0 0-1.274-1.432Z" />
            </SvgStyle>
            +48 507 755 251
          </ContactsStyle>
        </li>
        <li>
          <ContactsStyle href="https://www.linkedin.com/in/sofiiashevtsova/">
            <SvgStyle width="18" height="16" viewBox="0 0 32 32">
              <path d="M31.992 32v-0.001h0.008v-11.736c0-5.741-1.236-10.164-7.948-10.164-3.227 0-5.392 1.771-6.276 3.449h-0.093v-2.913h-6.364v21.364h6.627v-10.579c0-2.785 0.528-5.479 3.977-5.479 3.399 0 3.449 3.179 3.449 5.657v10.401h6.62z"></path>
              <path d="M0.528 10.636h6.635v21.364h-6.635v-21.364z"></path>
              <path d="M3.843 0c-2.121 0-3.843 1.721-3.843 3.843s1.721 3.879 3.843 3.879c2.121 0 3.843-1.757 3.843-3.879-0.001-2.121-1.723-3.843-3.843-3.843v0z"></path>
            </SvgStyle>
            Sofiia Shevtsova
          </ContactsStyle>
        </li>
      </SiteBarListStyle>
    </div>
  );
};

export default Contacts;
