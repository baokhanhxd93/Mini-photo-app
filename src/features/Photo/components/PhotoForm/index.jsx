import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Button, Spinner } from 'reactstrap'
import { Formik, Form, FastField } from 'formik'
import * as Yup from 'yup'
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global'
import InputField from '../../../../custom-fields/InputField'
import SelectField from '../../../../custom-fields/SelectField'
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField'

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const { initialValues, isAddMode } = props

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),
        categoryId: Yup.number().required('This field is required.').nullable(true),
        photo: Yup.string().required('This field is required.'),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // Do something
                const { values, errors, touched, isSubmitting } = formikProps
                console.log({values, errors, touched})
                
                return (
                    <Form>
                        <FastField 
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField 
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="Photo"
                        />

                        <FormGroup>
                            <Button
                                type="submit"
                                color={isAddMode ? "primary" : "success"}
                            >
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode ? "Add to album" : "Update your photo"}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PhotoForm