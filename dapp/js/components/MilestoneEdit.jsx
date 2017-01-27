import React from "react";

import { Modal, Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export default class MilestoneEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: props.filterText,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Input value change handler. Propagates the value to the parrent.
     *
     * @param{object} event Standard event object
     */
    handleChange(event) {
        this.setState({ filterText: event.target.value });

        // Propagate the value to parent component
        this.props.onUserInput(event.target.value);
    }

    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        { /** payDescription**/ }
                        <FormGroup>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** description **/ }
                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** url **/ }
                        <FormGroup>
                            <ControlLabel>Website URL</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** minCompletionDate **/ }
                        <FormGroup>
                            <ControlLabel>Milestone valid date from</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** maxCompletionDate **/ }
                        <FormGroup>
                            <ControlLabel>Milestone valid date to</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** reviewer **/ }
                        <FormGroup>
                            <ControlLabel>Reviewer</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** reviewTime **/ }
                        <FormGroup>
                            <ControlLabel>Review time</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** milestoneLeadLink **/ }
                        <FormGroup>
                            <ControlLabel>Milestone responsible</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** paymentSource **/ }
                        <FormGroup>
                            <ControlLabel>Vault address</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** payRecipient **/ }
                        <FormGroup>
                            <ControlLabel>Recipient address</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>

                        { /** payDelay **/ }
                        <FormGroup>
                            <ControlLabel>Delay of payment</ControlLabel>
                            <FormControl type="text" />
                            <FormControl.Feedback />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

MilestoneEdit.propTypes = {
    onHide: React.PropTypes.func.isRequired,
};
