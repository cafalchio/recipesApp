import { Card, Icon, Image } from "semantic-ui-react";
import './RecipeCard.css'


interface Props {
    image : string;
    header : string;
    meta : string;
    description : string;
}

export default function RecipeCard({image, header, description}: Props) {

    return (
        <div className="recipe-card-wrapper">
            <Card className="recipe-card"> 
                <Image src={image} wrapped ui={false} className="recipe-card-image" />
                <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description>
                    {description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    2 Comments
                </a>
                <span style={{marginLeft : "2rem"}}/>           
                <a>
                    <Icon name='heart' style={{color: "red"}}/>
                    <Icon name='heart' style={{color: "red"}}/>
                    <Icon name='heart' />
                    <Icon name='heart' />    
                    <Icon name='heart' />   
                </a>
                </Card.Content>
            </Card>
                    </div>
    )
}