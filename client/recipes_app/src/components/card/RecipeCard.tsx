import { Card } from "semantic-ui-react";

interface Props {
    image : string;
    header : string;
    meta : string;
    description : string;
}

export default function RecipeCard({image, header, meta, description}: Props) {

    return (
        <div >
        <Card  style={{margin: "3rem", width: "20rem"}}
            image={image}
            header={header}

            // meta={meta}
            description={description}
      />
      </div>
    )
}