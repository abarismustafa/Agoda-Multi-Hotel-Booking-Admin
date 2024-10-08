import { useState } from "react";

function NewsLetter() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0 h6">Send Newsletter</h5>
                </div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    action="https://weddemoadmin.abaris.in/admin/newsletter/send"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="VMCG0GyPLbYV3TMHzAvLcJNaqB7QY8AdRLyMvY5V"
                    />{" "}
                    <div className="form-group row">
                      <label className="col-sm-2 col-from-label" htmlFor="name">
                        Emails (Users)
                      </label>
                      <div className="col-sm-10">
                        <div className="dropdown bootstrap-select show-tick form-control aiz-" >
                          <select
                            className="form-control aiz-selectpicker"
                            name="user_emails[]"
                            multiple
                            data-selected-text-format="count"
                            data-actions-box="true"
                            tabIndex={-98}
                          >
                            <option value="user@example.com">
                              user@example.com
                            </option>
                            <option value="user2@example.com">
                              user2@example.com
                            </option>
                            <option value="user3@example.com">
                              user3@example.com
                            </option>
                            <option value="user4@example.com">
                              user4@example.com
                            </option>
                            <option value="user5@example.com">
                              user5@example.com
                            </option>
                            <option value="user6@example.com">
                              user6@example.com
                            </option>
                            <option value="user7@example.com">
                              user7@example.com
                            </option>
                            <option value="user8@example.com">
                              user8@example.com
                            </option>
                            <option value="user@9example.com">
                              user@9example.com
                            </option>
                            <option value="user10@example.com">
                              user10@example.com
                            </option>
                            <option value="user11@example.com">
                              user11@example.com
                            </option>
                            <option value="user12@example.com">
                              user12@example.com
                            </option>
                            <option value="user13@example.com">
                              user13@example.com
                            </option>
                            <option value="user14@example.com">
                              user14@example.com
                            </option>
                            <option value="user15@example.com">
                              user15@example.com
                            </option>
                            <option value="user16@example.com">
                              user16@example.com
                            </option>
                            <option value="user17@example.com">
                              user17@example.com
                            </option>
                            <option value="user19@example.com">
                              user19@example.com
                            </option>
                            <option value="user20@gmail.com">
                              user20@gmail.com
                            </option>
                            <option value="staff@example.com">
                              staff@example.com
                            </option>
                            <option value="Staff2@example.com">
                              Staff2@example.com
                            </option>
                            <option value />
                          </select>
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-light"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="22 items selected"
                            fdprocessedid="jca6a"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  22 items selected
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div
                            className="dropdown-menu"
                            style={{ maxHeight: 258, overflow: "hidden" }}
                          >
                            <div className="bs-actionsbox">
                              <div className="btn-group btn-group-sm btn-block">
                                <button
                                  type="button"
                                  className="actions-btn bs-select-all btn btn-light"
                                  fdprocessedid="vszsvo"
                                >
                                  Select All
                                </button>
                                <button
                                  type="button"
                                  className="actions-btn bs-deselect-all btn btn-light"
                                  fdprocessedid="t5jt3c"
                                >
                                  Deselect All
                                </button>
                              </div>
                            </div>
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                              aria-multiselectable="true"
                              style={{ maxHeight: 185, overflowY: "auto" }}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                                style={{ marginTop: 0, marginBottom: 0 }}
                              >
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-0"
                                    tabIndex={0}
                                    aria-selected="true"
                                    aria-setsize={22}
                                    aria-posinset={1}
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-1"
                                    tabIndex={0}
                                    aria-selected="true"
                                    aria-setsize={22}
                                    aria-posinset={2}
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user2@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-2"
                                    tabIndex={0}
                                    aria-selected="true"
                                    aria-setsize={22}
                                    aria-posinset={3}
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user3@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-3"
                                    tabIndex={0}
                                    aria-selected="true"
                                    aria-setsize={22}
                                    aria-posinset={4}
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user4@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-4"
                                    tabIndex={0}
                                    aria-selected="true"
                                    aria-setsize={22}
                                    aria-posinset={5}
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user5@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-5"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user6@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-6"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user7@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-7"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user8@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-8"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user@9example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-9"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user10@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-10"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user11@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-11"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user12@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-12"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user13@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-13"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user14@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-14"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user15@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-15"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user16@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-16"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user17@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-17"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user19@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-18"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      user20@gmail.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-19"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      staff@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-20"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text">
                                      Staff2@example.com
                                    </span>
                                  </a>
                                </li>
                                <li className="selected">
                                  <a
                                    role="option"
                                    className="dropdown-item selected"
                                    id="bs-select-1-21"
                                    tabIndex={0}
                                    aria-selected="true"
                                  >
                                    <span className=" bs-ok-default check-mark" />
                                    <span className="text" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-2 col-from-label"
                        htmlFor="subject"
                      >
                        Newsletter subject
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          required
                          fdprocessedid="uqqnh"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-from-label" htmlFor="name">
                        Newsletter content
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          rows={8}
                          className="form-control aiz-text-editor"
                          data-buttons='[["font", ["bold", "underline", "italic"]],["para", ["ul", "ol"]], ["insert", ["link", "picture"]],["view", ["undo","redo"]]]'
                          name="content"
                          required
                          style={{ display: "none" }}
                          defaultValue={""}
                        />
                        <div className="note-editor note-frame card">
                          <div className="note-dropzone">
                            <div className="note-dropzone-message" />
                          </div>
                          <div
                            className="note-toolbar card-header"
                            role="toolbar"
                          >
                            <div className="note-btn-group btn-group note-font">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-bold"
                                tabIndex={-1}
                                title
                                aria-label="Bold (CTRL+B)"
                                data-original-title="Bold (CTRL+B)"
                              >
                                <i className="note-icon-bold" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-underline"
                                tabIndex={-1}
                                title
                                aria-label="Underline (CTRL+U)"
                                data-original-title="Underline (CTRL+U)"
                              >
                                <i className="note-icon-underline" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm note-btn-italic"
                                tabIndex={-1}
                                title
                                aria-label="Italic (CTRL+I)"
                                data-original-title="Italic (CTRL+I)"
                              >
                                <i className="note-icon-italic" />
                              </button>
                            </div>
                            <div className="note-btn-group btn-group note-para">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Unordered list (CTRL+SHIFT+NUM7)"
                                data-original-title="Unordered list (CTRL+SHIFT+NUM7)"
                              >
                                <i className="note-icon-unorderedlist" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Ordered list (CTRL+SHIFT+NUM8)"
                                data-original-title="Ordered list (CTRL+SHIFT+NUM8)"
                              >
                                <i className="note-icon-orderedlist" />
                              </button>
                            </div>
                            <div className="note-btn-group btn-group note-insert">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Link (CTRL+K)"
                                data-original-title="Link (CTRL+K)"
                              >
                                <i className="note-icon-link" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Picture"
                                data-original-title="Picture"
                              >
                                <i className="note-icon-picture" />
                              </button>
                            </div>
                            <div className="note-btn-group btn-group note-view">
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Undo (CTRL+Z)"
                                data-original-title="Undo (CTRL+Z)"
                              >
                                <i className="note-icon-undo" />
                              </button>
                              <button
                                type="button"
                                className="note-btn btn btn-light btn-sm"
                                tabIndex={-1}
                                title
                                aria-label="Redo (CTRL+Y)"
                                data-original-title="Redo (CTRL+Y)"
                              >
                                <i className="note-icon-redo" />
                              </button>
                            </div>
                          </div>
                          <div className="note-editing-area">
                            <div className="note-handle">
                              <div
                                className="note-control-selection"
                                style={{ display: "none" }}
                              >
                                <div className="note-control-selection-bg" />
                                <div className="note-control-holder note-control-nw" />
                                <div className="note-control-holder note-control-ne" />
                                <div className="note-control-holder note-control-sw" />
                                <div className="note-control-sizing note-control-se" />
                                <div className="note-control-selection-info" />
                              </div>
                            </div>
                            <textarea
                              className="note-codable"
                              aria-multiline="true"
                              defaultValue={""}
                            />
                            <div
                              className="note-editable card-block"
                              contentEditable="true"
                              role="textbox"
                              aria-multiline="true"
                              spellCheck="true"
                              autoCorrect="true"
                              style={{ height: 200 }}
                            >
                              <p>
                                <br />
                              </p>
                            </div>
                          </div>
                          <output
                            className="note-status-output"
                            role="status"
                            aria-live="polite"
                          />
                          <div className="note-statusbar" role="status">
                            <output
                              className="note-status-output"
                              aria-live="polite"
                            />
                            <div className="note-resizebar" aria-label="Resize">
                              <div className="note-icon-bar" />
                              <div className="note-icon-bar" />
                              <div className="note-icon-bar" />
                            </div>
                          </div>
                          <div
                            className="modal note-modal link-dialog"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Link"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Link</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group">
                                    <label
                                      htmlFor="note-dialog-link-txt-16771446832411"
                                      className="note-form-label"
                                    >
                                      Text to display
                                    </label>
                                    <input
                                      id="note-dialog-link-txt-16771446832411"
                                      className="note-link-text form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                  <div className="form-group note-form-group">
                                    <label
                                      htmlFor="note-dialog-link-url-16771446832411"
                                      className="note-form-label"
                                    >
                                      To what URL should this link go?
                                    </label>
                                    <input
                                      id="note-dialog-link-url-16771446832411"
                                      className="note-link-url form-control note-form-control note-input"
                                      type="text"
                                      defaultValue="http://"
                                    />
                                  </div>
                                  <div className="form-check sn-checkbox-open-in-new-window">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        defaultChecked
                                        aria-label="Open in new window"
                                        aria-checked="true"
                                      />{" "}
                                      Open in new window
                                    </label>
                                  </div>
                                  <div className="form-check sn-checkbox-use-protocol">
                                    <label className="form-check-label">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        defaultChecked
                                        aria-label="Use default protocol"
                                        aria-checked="true"
                                      />{" "}
                                      Use default protocol
                                    </label>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-link-btn"
                                    defaultValue="Insert Link"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="note-popover popover in note-link-popover bottom"
                            style={{ display: "none" }}
                          >
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <span>
                                <a target="_blank" />
                                &nbsp;
                              </span>
                              <div className="note-btn-group btn-group note-link">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Edit"
                                  data-original-title="Edit"
                                >
                                  <i className="note-icon-link" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Unlink"
                                  data-original-title="Unlink"
                                >
                                  <i className="note-icon-chain-broken" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Image"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Image</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group note-group-select-from-files">
                                    <label
                                      htmlFor="note-dialog-image-file-16771446832411"
                                      className="note-form-label"
                                    >
                                      Select from files
                                    </label>
                                    <input
                                      id="note-dialog-image-file-16771446832411"
                                      className="note-image-input form-control-file note-form-control note-input"
                                      type="file"
                                      name="files"
                                      accept="image/*"
                                      multiple="multiple"
                                    />
                                  </div>
                                  <div className="form-group note-group-image-url">
                                    <label
                                      htmlFor="note-dialog-image-url-16771446832411"
                                      className="note-form-label"
                                    >
                                      Image URL
                                    </label>
                                    <input
                                      id="note-dialog-image-url-16771446832411"
                                      className="note-image-url form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-image-btn"
                                    defaultValue="Insert Image"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="note-popover popover in note-image-popover bottom"
                            style={{ display: "none" }}
                          >
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-resize">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize full"
                                  data-original-title="Resize full"
                                >
                                  <span className="note-fontsize-10">100%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize half"
                                  data-original-title="Resize half"
                                >
                                  <span className="note-fontsize-10">50%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Resize quarter"
                                  data-original-title="Resize quarter"
                                >
                                  <span className="note-fontsize-10">25%</span>
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Original size"
                                  data-original-title="Original size"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-float">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Left"
                                  data-original-title="Float Left"
                                >
                                  <i className="note-icon-float-left" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Float Right"
                                  data-original-title="Float Right"
                                >
                                  <i className="note-icon-float-right" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove float"
                                  data-original-title="Remove float"
                                >
                                  <i className="note-icon-rollback" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-remove">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm"
                                  tabIndex={-1}
                                  title
                                  aria-label="Remove Image"
                                  data-original-title="Remove Image"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="note-popover popover in note-table-popover bottom"
                            style={{ display: "none" }}
                          >
                            <div className="arrow" />
                            <div className="popover-content note-children-container">
                              <div className="note-btn-group btn-group note-add">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row below"
                                  data-original-title="Add row below"
                                >
                                  <i className="note-icon-row-below" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add row above"
                                  data-original-title="Add row above"
                                >
                                  <i className="note-icon-row-above" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column left"
                                  data-original-title="Add column left"
                                >
                                  <i className="note-icon-col-before" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Add column right"
                                  data-original-title="Add column right"
                                >
                                  <i className="note-icon-col-after" />
                                </button>
                              </div>
                              <div className="note-btn-group btn-group note-delete">
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete row"
                                  data-original-title="Delete row"
                                >
                                  <i className="note-icon-row-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete column"
                                  data-original-title="Delete column"
                                >
                                  <i className="note-icon-col-remove" />
                                </button>
                                <button
                                  type="button"
                                  className="note-btn btn btn-light btn-sm btn-md"
                                  tabIndex={-1}
                                  title
                                  aria-label="Delete table"
                                  data-original-title="Delete table"
                                >
                                  <i className="note-icon-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Insert Video"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Insert Video</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="form-group note-form-group row-fluid">
                                    <label
                                      htmlFor="note-dialog-video-url-16771446832411"
                                      className="note-form-label"
                                    >
                                      Video URL{" "}
                                      <small className="text-muted">
                                        (YouTube, Vimeo, Vine, Instagram,
                                        DailyMotion or Youku)
                                      </small>
                                    </label>
                                    <input
                                      id="note-dialog-video-url-16771446832411"
                                      className="note-video-url form-control note-form-control note-input"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <input
                                    type="button"
                                    href="#"
                                    className="btn btn-primary note-btn note-btn-primary note-video-btn"
                                    defaultValue="Insert Video"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="modal note-modal"
                            aria-hidden="false"
                            tabIndex={-1}
                            role="dialog"
                            aria-label="Help"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Help</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-hidden="true"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div
                                  className="modal-body"
                                  style={{ maxHeight: 300, overflow: "scroll" }}
                                >
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>ENTER</kbd>
                                  </label>
                                  <span>Insert Paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+Z</kbd>
                                  </label>
                                  <span>Undoes the last command</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+Y</kbd>
                                  </label>
                                  <span>Redoes the last command</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>TAB</kbd>
                                  </label>
                                  <span>Tab</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>SHIFT+TAB</kbd>
                                  </label>
                                  <span>Untab</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+B</kbd>
                                  </label>
                                  <span>Set a bold style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+I</kbd>
                                  </label>
                                  <span>Set a italic style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+U</kbd>
                                  </label>
                                  <span>Set a underline style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+S</kbd>
                                  </label>
                                  <span>Set a strikethrough style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+BACKSLASH</kbd>
                                  </label>
                                  <span>Clean a style</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+L</kbd>
                                  </label>
                                  <span>Set left align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+E</kbd>
                                  </label>
                                  <span>Set center align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+R</kbd>
                                  </label>
                                  <span>Set right align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+J</kbd>
                                  </label>
                                  <span>Set full align</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+NUM7</kbd>
                                  </label>
                                  <span>Toggle unordered list</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+SHIFT+NUM8</kbd>
                                  </label>
                                  <span>Toggle ordered list</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+LEFTBRACKET</kbd>
                                  </label>
                                  <span>Outdent on current paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+RIGHTBRACKET</kbd>
                                  </label>
                                  <span>Indent on current paragraph</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM0</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as a
                                    paragraph(P tag)
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM1</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H1
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM2</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H2
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM3</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H3
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM4</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H4
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM5</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H5
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+NUM6</kbd>
                                  </label>
                                  <span>
                                    Change current block's format as H6
                                  </span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+ENTER</kbd>
                                  </label>
                                  <span>Insert horizontal rule</span>
                                  <div className="help-list-item" />
                                  <label
                                    style={{ width: 180, marginRight: 10 }}
                                  >
                                    <kbd>CTRL+K</kbd>
                                  </label>
                                  <span>Show Link Dialog</span>
                                </div>
                                <div className="modal-footer">
                                  <p className="text-center">
                                    <a
                                      href="http://summernote.org/"
                                      target="_blank"
                                    >
                                      Summernote 0.8.16
                                    </a>{" "}
                                    ·{" "}
                                    <a
                                      href="https://github.com/summernote/summernote"
                                      target="_blank"
                                    >
                                      Project
                                    </a>{" "}
                                    ·{" "}
                                    <a
                                      href="https://github.com/summernote/summernote/issues"
                                      target="_blank"
                                    >
                                      Issues
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        fdprocessedid="wtgkw"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default NewsLetter;
