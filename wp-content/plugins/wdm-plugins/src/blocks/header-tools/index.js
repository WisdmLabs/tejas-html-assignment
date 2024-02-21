import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  CheckboxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import icons from "../../icons.js";
import "./main.css";
import block from "./block.json";

registerBlockType(block.name, {
  icon: {
    src: icons.primary,
  },
  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { showAuth } = attributes;
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "wdm-plugins")}>
            <SelectControl
              label={__("Show Login/Register link", "wdm-plugins")}
              value={showAuth}
              options={[
                { label: __("No", "wdm-plugins"), value: false },
                { label: __("Yes", "wdm-plugins"), value: true },
              ]}
              onChange={(newVal) =>
                setAttributes({ showAuth: newVal === "true" })
              }
            />
            <CheckboxControl
              label={__("Show Login/Register link", "wdm-plugins")}
              help={
                showAuth
                  ? __("Showing Link", "wdm-plugins")
                  : __("Hiding Link", "wdm-plugins")
              }
              checked={showAuth}
              onChange={(newVal) => setAttributes({ showAuth: newVal })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          {showAuth && (
            <a className="signin-link open-modal" href="#">
              <div className="signin-icon">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="signin-text">
                <small>Hello, Sign in</small>
                My Account
              </div>
            </a>
          )}
        </div>
      </>
    );
  },
});
