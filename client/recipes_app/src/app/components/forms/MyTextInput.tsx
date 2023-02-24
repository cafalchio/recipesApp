import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    type?: string;
}
export default function MyTextInput({placeholder, name, type}: Props) {
    const [field, meta] = useField(name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <input {...field} placeholder={placeholder} type={type} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}