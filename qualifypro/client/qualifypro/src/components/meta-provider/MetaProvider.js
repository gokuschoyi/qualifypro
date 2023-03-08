import { Helmet } from "react-helmet-async";

const MetaProvider = ({ title, description, link }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${process.env.REACT_APP_CLIENT_URL}/${link}`} />
        </Helmet>
    );
}

export default MetaProvider;