import {
  useBlockProps,
  InspectorControls,
  RichText,
  MediaPlaceholder,
  BlockControls,
  MediaReplaceFlow,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  TextareaControl,
  Spinner,
  ToolbarButton,
  Tooltip,
  Icon,
  TextControl,
  Button,
} from "@wordpress/components";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { useState } from "@wordpress/element";

export default function ({ attributes, setAttributes, context, isSelected }) {
  const { name, title, bio, imgID, imgAlt, imgURL, socialHandles } = attributes;
  const blockProps = useBlockProps();

  const [imgPreview, setImgPreview] = useState(imgURL);

  const selectImg = (img) => {
    let newImgURL = null;

    if (isBlobURL(img.url)) {
      newImgURL = img.url;
    } else {
      newImgURL = img.sizes
        ? img.sizes.teamMember.url
        : img.media_details.sizes.teamMember.source_url;

      setAttributes({
        imgID: img.id,
        imgAlt: img.alt,
        imgURL: newImgURL,
      });

      revokeBlobURL(imgPreview);
    }

    setImgPreview(newImgURL);
  };

  const selectImgURL = (url) => {
    setAttributes({
      imgID: null,
      imgAlt: null,
      imgURL: url,
    });

    setImgPreview(url);
  };

  const imageClass = `wp-image-${imgID} img-${context["wdm-plugins/image-shape"]}`;

  const [activeSocialLink, setActiveSocialLink] = useState(null);

  setAttributes({
    imageShape: context["wdm-plugins/image-shape"],
  });

  return (
    <>
      {imgPreview && (
        <BlockControls group="inline">
          <MediaReplaceFlow
            name={__("Replace Image", "wdm-plugins")}
            mediaId={imgID}
            mediaURL={imgURL}
            allowedTypes={["image"]}
            accept={"image/*"}
            onError={(error) => console.error(error)}
            onSelect={selectImg}
            onSelectURL={selectImgURL}
          />
          <ToolbarButton
            onClick={() => {
              setAttributes({
                imgID: 0,
                imgAlt: "",
                imgURL: "",
              });

              setImgPreview("");
            }}
          >
            {__("Remove Image", "wdm-plugins")}
          </ToolbarButton>
        </BlockControls>
      )}

      <InspectorControls>
        <PanelBody title={__("Settings", "wdm-plugins")}>
          {imgPreview && !isBlobURL(imgPreview) && (
            <TextareaControl
              label={__("Alt Attribute", "wdm-plugins")}
              value={imgAlt}
              onChange={(imgAlt) => setAttributes({ imgAlt })}
              help={__(
                "Description of your image for screen readers.",
                "wdm-plugins"
              )}
            />
          )}
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="author-meta">
          {imgPreview && (
            <img src={imgPreview} alt={imgAlt} className={imageClass} />
          )}
          {isBlobURL(imgPreview) && <Spinner />}
          <MediaPlaceholder
            allowedTypes={["image"]}
            accept={"image/*"}
            icon="admin-users"
            onSelect={selectImg}
            onError={(error) => console.error(error)}
            disableMediaButtons={imgPreview}
            onSelectURL={selectImgURL}
          />
          <p>
            <RichText
              placeholder={__("Name", "wdm-plugins")}
              tagName="strong"
              onChange={(name) => setAttributes({ name })}
              value={name}
            />
            <RichText
              placeholder={__("Title", "wdm-plugins")}
              tagName="span"
              onChange={(title) => setAttributes({ title })}
              value={title}
            />
          </p>
        </div>
        <div className="member-bio">
          <RichText
            placeholder={__("Member bio", "wdm-plugins")}
            tagName="p"
            onChange={(bio) => setAttributes({ bio })}
            value={bio}
          />
        </div>
        <div className="social-links">
          {socialHandles.map((handle, index) => {
            return (
              <a
                href={handle.url}
                key={index}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveSocialLink(
                    activeSocialLink === index ? null : index
                  );
                }}
                className={
                  activeSocialLink === index && isSelected ? "is-active" : ""
                }
              >
                <i className={`bi bi-${handle.icon}`}></i>
              </a>
            );
          })}
          {isSelected && (
            <Tooltip text={__("Add Social Media Handle", "wdm-plugins")}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setAttributes({
                    socialHandles: [
                      ...socialHandles,
                      {
                        icon: "question",
                        url: "",
                      },
                    ],
                  });

                  setActiveSocialLink(socialHandles.length);
                }}
              >
                <Icon icon="plus" />
              </a>
            </Tooltip>
          )}
        </div>
        {isSelected && activeSocialLink !== null && (
          <div className="team-member-social-edit-ctr">
            <TextControl
              label={__("URL", "wdm-plugins")}
              value={socialHandles[activeSocialLink].url}
              onChange={(url) => {
                const tempLink = { ...socialHandles[activeSocialLink] };
                const tempSocial = [...socialHandles];

                tempLink.url = url;
                tempSocial[activeSocialLink] = tempLink;

                setAttributes({ socialHandles: tempSocial });
              }}
            />
            <TextControl
              label={__("Icon", "wdm-plugins")}
              value={socialHandles[activeSocialLink].icon}
              onChange={(icon) => {
                const tempLink = { ...socialHandles[activeSocialLink] };
                const tempSocial = [...socialHandles];

                tempLink.icon = icon;
                tempSocial[activeSocialLink] = tempLink;

                setAttributes({ socialHandles: tempSocial });
              }}
            />
            <Button
              isDestructive
              onClick={() => {
                const tempCopy = [...socialHandles];
                tempCopy.splice(activeSocialLink, 1);

                setAttributes({ socialHandles: tempCopy });
                setActiveSocialLink(null);
              }}
            >
              {__("Remove", "wdm-plugins")}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
