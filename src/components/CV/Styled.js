const { default: styled } = require("@emotion/styled");


const StyledList = {
    ResumeBox: styled.div`
        display: flex;
        margin: 0 auto;
            width: 1200px;


    `,
    SiteBarStyle: styled.div`
        display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 20px;
    width: 40%;
        background-color: #055017;
    `,
    AvatarStyle: styled.img`
    width: 85%;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: -8px 8px 24px 10px rgba(79, 212, 85);
    `,
    
    MainStyle: styled.div`
            display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 30px;
    width: 60%;
    color: #05421c;
    `,

    WorkStyle: styled.h2`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;`,

    SpecifikStyle: styled.p`
        font-size: 12px;
    `,
    NameStyle: styled.h1`
    font-weight: 700;
    font-size: 48px;
    `,

    AboutMeStyle: styled.p`
    font-weight: 700;
    font-size: 24px;
    `,
    SloganStyle: styled.span`
        display: block;
            margin-bottom: 5px;
    `,
}

export default StyledList;