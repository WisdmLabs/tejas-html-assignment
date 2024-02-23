import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import icons from "../../icons.js";
import "./main.css";
import { className } from "postcss-selector-parser";

registerBlockType("wdm-plugins/team-members-group", {
  icon: {
    src: icons.primary,
  },
  edit({ attributes, setAttributes }) {
    const { columns, imageShape } = attributes;
    const blockProps = useBlockProps({
      className: `cols-${columns}`,
    });

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Settings", "wdm-plugins")}>
            <RangeControl
              label={__("Columns", "wdm-plugins")}
              onChange={(columns) => setAttributes({ columns })}
              value={columns}
              min={2}
              max={4}
            />
            <SelectControl
              label={__("Image Shape", "wdm-plugins")}
              value={imageShape}
              options={[
                { label: __("Hexagon", "wdm-plugins"), value: "hexagon" },
                { label: __("Rabbet", "wdm-plugins"), value: "rabbet" },
                { label: __("Pentagon", "wdm-plugins"), value: "pentagon" },
              ]}
              onChange={(imageShape) => setAttributes({ imageShape })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <InnerBlocks
            orientation="horizontal"
            allowedBlocks={["wdm-plugins/team-member"]}
            template={[
              [
                "wdm-plugins/team-member",
                {
                  name: "John Doe",
                  title: "CEO of Udemy",
                  bio: "This is an example of bio",
                },
              ],
              ["wdm-plugins/team-member"],
              ["wdm-plugins/team-member"],
            ]}
            // templateLock="all"
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const { columns } = attributes;
    const blockProps = useBlockProps.save({
      className: `cols-${columns}`,
    });

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
