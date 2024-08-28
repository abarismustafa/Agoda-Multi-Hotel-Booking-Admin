import React, { useState } from 'react'
import ReactQuill from 'react-quill'

function CookiesAgreement() {
    const [body,setBody] = useState("")
    const handleBody = (e) => {
        setBody(e)
    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h6 className="fw-600 mb-0">Cookies Agreement</h6>
                </div>
                <div className="card-body">
                    <form action="https://weddemoadmin.abaris.in/admin/settings/update" method="POST" encType="multipart/form-data">
                        <input type="hidden" name="_token" defaultValue="5CTdBKNA6Y5nqLu8eZdjBzuxtXiRGZsyxvc7nJD4" />            <div className="form-group row">
                            <label className="col-md-3 col-from-label">Cookies Agreement Text</label>
                            <div className="col-md-8">
                            <ReactQuill 
    placeholder='write something amazing...'
    modules={CookiesAgreement.modules}
    formats={CookiesAgreement.formats}
    onChange={handleBody}
    value={body}
    />
                                {/* <input type="hidden" name="types[]" defaultValue="cookies_agreement_text" />
                                <textarea name="cookies_agreement_text" rows={4} className="aiz-text-editor form-control" data-buttons="[[&quot;font&quot;, [&quot;bold&quot;]],[&quot;insert&quot;, [&quot;link&quot;]]]" style={{ display: 'none' }} defaultValue={"<p><span style=\"color: rgb(27, 27, 40);\">We use cookie for better user experence.</span><br></p>"} /><div className="note-editor note-frame card"><div className="note-dropzone"><div className="note-dropzone-message" /></div><div className="note-toolbar card-header" role="toolbar"><div className="note-btn-group btn-group note-font"><button type="button" className="note-btn btn btn-light btn-sm note-btn-bold" tabIndex={-1} title aria-label="Bold (CTRL+B)" data-original-title="Bold (CTRL+B)"><i className="note-icon-bold" /></button></div><div className="note-btn-group btn-group note-insert"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Link (CTRL+K)" data-original-title="Link (CTRL+K)"><i className="note-icon-link" /></button></div></div><div className="note-editing-area"><div className="note-handle"><div className="note-control-selection"><div className="note-control-selection-bg" />
                                    <div className="note-control-holder note-control-nw" /><div className="note-control-holder note-control-ne" /><div className="note-control-holder note-control-sw" /><div className="note-control-sizing note-control-se" /><div className="note-control-selection-info" /></div></div><textarea className="note-codable" aria-multiline="true" defaultValue={""} /><div className="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true" spellCheck="true" autoCorrect="true" style={{ height: 200 }}><p><span style={{ color: 'rgb(27, 27, 40)' }}>We use cookie for better user experence.</span><br /></p></div></div><output className="note-status-output" role="status" aria-live="polite" /><div className="note-statusbar" role="status"><output className="note-status-output" aria-live="polite" /><div className="note-resizebar" aria-label="Resize">
                                        <div className="note-icon-bar" /><div className="note-icon-bar" /><div className="note-icon-bar" /></div></div><div className="modal note-modal link-dialog" aria-hidden="false" tabIndex={-1} role="dialog" aria-label="Insert Link"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4 className="modal-title">Insert Link</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button></div><div className="modal-body"><div className="form-group note-form-group"><label htmlFor="note-dialog-link-txt-16775068579741" className="note-form-label">Text to display</label><input id="note-dialog-link-txt-16775068579741" className="note-link-text form-control note-form-control note-input" type="text" /></div><div className="form-group note-form-group"><label htmlFor="note-dialog-link-url-16775068579741" className="note-form-label">To what URL should this link go?</label><input id="note-dialog-link-url-16775068579741" className="note-link-url form-control note-form-control note-input" type="text" defaultValue="http://" />
                                        </div><div className="form-check sn-checkbox-open-in-new-window"><label className="form-check-label"><input type="checkbox" className="form-check-input" defaultChecked aria-label="Open in new window" aria-checked="true" /> Open in new window</label></div><div className="form-check sn-checkbox-use-protocol"><label className="form-check-label"><input type="checkbox" className="form-check-input" defaultChecked aria-label="Use default protocol" aria-checked="true" /> Use default protocol</label></div></div><div className="modal-footer"><input type="button" href="#" className="btn btn-primary note-btn note-btn-primary note-link-btn" defaultValue="Insert Link" disabled /></div></div></div></div><div className="note-popover popover in note-link-popover bottom"><div className="arrow" />
                                        <div className="popover-content note-children-container"><span><a target="_blank" />&nbsp;</span><div className="note-btn-group btn-group note-link"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Edit" data-original-title="Edit"><i className="note-icon-link" /></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Unlink" data-original-title="Unlink"><i className="note-icon-chain-broken" /></button></div></div></div><div className="modal note-modal" aria-hidden="false" tabIndex={-1} role="dialog" aria-label="Insert Image"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4 className="modal-title">Insert Image</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button></div><div className="modal-body"><div className="form-group note-form-group note-group-select-from-files"><label htmlFor="note-dialog-image-file-16775068579741" className="note-form-label">Select from files</label><input id="note-dialog-image-file-16775068579741" className="note-image-input form-control-file note-form-control note-input" type="file" name="files" accept="image/*" multiple="multiple" /></div><div className="form-group note-group-image-url"><label htmlFor="note-dialog-image-url-16775068579741" className="note-form-label">Image URL</label><input id="note-dialog-image-url-16775068579741" className="note-image-url form-control note-form-control note-input" type="text" /></div></div><div className="modal-footer">
                                                <input type="button" href="#" className="btn btn-primary note-btn note-btn-primary note-image-btn" defaultValue="Insert Image" disabled /></div></div></div></div><div className="note-popover popover in note-image-popover bottom"><div className="arrow" /><div className="popover-content note-children-container"><div className="note-btn-group btn-group note-resize"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Resize full" data-original-title="Resize full"><span className="note-fontsize-10">100%</span></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Resize half" data-original-title="Resize half"><span className="note-fontsize-10">50%</span></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Resize quarter" data-original-title="Resize quarter"><span className="note-fontsize-10">25%</span></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Original size" data-original-title="Original size"><i className="note-icon-rollback" /></button></div><div className="note-btn-group btn-group note-float"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Float Left" data-original-title="Float Left"><i className="note-icon-float-left" /></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Float Right" data-original-title="Float Right"><i className="note-icon-float-right" /></button><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Remove float" data-original-title="Remove float"><i className="note-icon-rollback" /></button></div>
                                                    <div className="note-btn-group btn-group note-remove"><button type="button" className="note-btn btn btn-light btn-sm" tabIndex={-1} title aria-label="Remove Image" data-original-title="Remove Image"><i className="note-icon-trash" /></button></div></div></div><div className="note-popover popover in note-table-popover bottom"><div className="arrow" /><div className="popover-content note-children-container"><div className="note-btn-group btn-group note-add"><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Add row below" data-original-title="Add row below"><i className="note-icon-row-below" /></button><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Add row above" data-original-title="Add row above"><i className="note-icon-row-above" />
                                                    </button><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Add column left" data-original-title="Add column left"><i className="note-icon-col-before" /></button><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Add column right" data-original-title="Add column right"><i className="note-icon-col-after" /></button></div><div className="note-btn-group btn-group note-delete"><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Delete row" data-original-title="Delete row">
                                                        <i className="note-icon-row-remove" /></button><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Delete column" data-original-title="Delete column"><i className="note-icon-col-remove" /></button><button type="button" className="note-btn btn btn-light btn-sm btn-md" tabIndex={-1} title aria-label="Delete table" data-original-title="Delete table"><i className="note-icon-trash" /></button></div></div></div><div className="modal note-modal" aria-hidden="false" tabIndex={-1} role="dialog" aria-label="Insert Video"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4 className="modal-title">Insert Video</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button></div><div className="modal-body"><div className="form-group note-form-group row-fluid">
                                                            <label htmlFor="note-dialog-video-url-16775068579741" className="note-form-label">Video URL <small className="text-muted">(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)</small></label><input id="note-dialog-video-url-16775068579741" className="note-video-url form-control note-form-control note-input" type="text" /></div></div><div className="modal-footer"><input type="button" href="#" className="btn btn-primary note-btn note-btn-primary note-video-btn" defaultValue="Insert Video" disabled /></div></div></div></div><div className="modal note-modal" aria-hidden="false" tabIndex={-1} role="dialog" aria-label="Help"><div className="modal-dialog"><div className="modal-content"><div className="modal-header"><h4 className="modal-title">Help</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">×</button></div><div className="modal-body" style={{ maxHeight: 300, overflow: 'scroll' }}>
                                                                <div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>ENTER</kbd></label><span>Insert Paragraph</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+Z</kbd></label><span>Undoes the last command</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+Y</kbd></label><span>Redoes the last command</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>TAB</kbd></label><span>Tab</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>SHIFT+TAB</kbd></label><span>Untab</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+B</kbd></label><span>Set a bold style</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+I</kbd></label>
                                                                <span>Set a italic style</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+U</kbd></label><span>Set a underline style</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+S</kbd></label><span>Set a strikethrough style</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+BACKSLASH</kbd></label><span>Clean a style</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+L</kbd></label><span>Set left align</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+E</kbd></label><span>Set center align</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+R</kbd></label><span>Set right align</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+J</kbd></label><span>Set full align</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+NUM7</kbd></label><span>Toggle unordered list</span>
                                                                <div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+SHIFT+NUM8</kbd></label><span>Toggle ordered list</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+LEFTBRACKET</kbd></label><span>Outdent on current paragraph</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+RIGHTBRACKET</kbd></label><span>Indent on current paragraph</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM0</kbd></label><span>Change current block's format as a paragraph(P tag)</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM1</kbd></label><span>Change current block's format as H1</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM2</kbd></label><span>Change current block's format as H2</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM3</kbd></label><span>Change current block's format as H3</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM4</kbd></label><span>Change current block's format as H4</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM5</kbd></label><span>Change current block's format as H5</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+NUM6</kbd></label><span>Change current block's format as H6</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+ENTER</kbd></label><span>Insert horizontal rule</span><div className="help-list-item" /><label style={{ width: 180, marginRight: 10 }}><kbd>CTRL+K</kbd></label><span>Show Link Dialog</span></div><div className="modal-footer"><p className="text-center"><a href="http://summernote.org/" target="_blank">Summernote 0.8.16</a> · <a href="https://github.com/summernote/summernote" target="_blank">Project</a> · <a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a></p></div></div></div></div></div> */}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-3 col-from-label">Show Cookies Agreement?</label>
                            <div className="col-md-8">
                                <label className="aiz-switch aiz-switch-success mb-0">
                                    <input type="hidden" name="types[]" defaultValue="show_cookies_agreement" />
                                    <input type="checkbox" name="show_cookies_agreement" defaultChecked />
                                    <span />
                                </label>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="button" className="btn btn-primary" fdprocessedid="a3ofm9a">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CookiesAgreement