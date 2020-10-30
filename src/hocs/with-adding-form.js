import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../store/action.js";

const withAddingForm = (Component) => {
    class WithAddingForm extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                title: ``,
                description: ``,
            };

            this._formSubmitHandler = this._formSubmitHandler.bind(this);
            this._titleChangeHandler = this._titleChangeHandler.bind(this);
            this._descriptionChangeHandler = this._descriptionChangeHandler.bind(this);
            this._onSuccess = this._onSuccess.bind(this);
        }

        _formSubmitHandler(evt) {
            const {uploadProduct} = this.props;

            evt.preventDefault();

            uploadProduct(
                {
                    id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
                    title: this.state.title,
                    image: `https://source.unsplash.com/random`,
                    description: this.state.description,
                    price: parseFloat(((Math.random() * (120 - 10)) + 10).toFixed(2)),
                }
            );

            this._onSuccess();
        }

        _titleChangeHandler(evt) {
            this.setState({
                title: evt.target.value,
            });
        }

        _descriptionChangeHandler(evt) {
            this.setState({
                description: evt.target.value,
            });
        }

        _onSuccess() {
            this.setState({
                title: ``,
                description: ``,
            });
        }

        render() {
            return (
                <Component
                    {...this.props}
                    title={this.state.title}
                    description={this.state.description}
                    onSubmit={this._formSubmitHandler}
                    onTitleChange={this._titleChangeHandler}
                    onDescriptionChange={this._descriptionChangeHandler}
                />
            );
        }
    }

    WithAddingForm.propTypes = {
        uploadProduct: PropTypes.func.isRequired,
    };

    const mapDispatchToProps = (dispatch) => ({
        uploadProduct(newProduct) {
            dispatch(ActionCreator.addProduct(newProduct));
        },
    });

    return connect(null, mapDispatchToProps)(WithAddingForm);
};

export {withAddingForm};
export default withAddingForm;
