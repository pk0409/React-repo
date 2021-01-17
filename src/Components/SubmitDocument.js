import React from 'react';
class SubmitDocument extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SubmitDocument;