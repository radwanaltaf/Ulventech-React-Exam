import { FormEvent, useEffect, useState } from "react"
import { FormResponse } from "../types";

export default function DynamicForm(): JSX.Element {
    const [formData, setFormData] = useState<FormResponse>();

    useEffect(() => {
        const fetchFormData = async () => {
            let response = await fetch(
                'https://ulventech-react-exam.netlify.app/api/form'
            );
            let data = await response.json();
            setFormData(data);
            console.log(data)
        }

        fetchFormData();
    }, [])

    const onFormSubmit = async (event: FormEvent): Promise<void> => {
        event.preventDefault();
        const res = await fetch(
            'https://ulventech-react-exam.netlify.app/api/form',
            {
                body: JSON.stringify({
                    name: event.target.name.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (
        <section id="mainForm">
            <form onSubmit={onFormSubmit}>
                {formData ? formData.data.map((field, index) => {
                    if (field.type === 'select') {
                        return (
                            <div key={index} className="form-group mb-3">
                                <label htmlFor={field.fieldName}>{field.fieldName}</label>
                                <select defaultValue={field.value} className="form-control" id={field.fieldName}>
                                    {field.options?.map((option, i) => {
                                        return (
                                            <option key={i} value={option}>{option}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        )
                    } else if (field.type === 'multiline') {
                        return (
                            <div key={index} className="mb-3">
                                <label htmlFor={field.fieldName} className="form-label">{field.fieldName}
                                </label>
                                <textarea className="form-control" id={field.fieldName} name={field.fieldName} defaultValue={field.value} />
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="mb-3">
                                <label htmlFor={field.fieldName} className="form-label">{field.fieldName}
                                </label>
                                <input defaultValue={field.value} type={field.type} className="form-control" id={field.fieldName} name={field.fieldName} />
                            </div>
                        )

                    }
                }) : null}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}