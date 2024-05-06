import apiFetch from "@wordpress/api-fetch";
import {Button, PanelBody, PanelRow} from "@wordpress/components";
import {RichText, InspectorControls, MediaUpload, MediaUploadCheck} from "@wordpress/block-editor";
import {useEffect} from "@wordpress/element";

wp.blocks.registerBlockType("rekrublocktheme/whyoutsourcing", {
    title: "Rekru Why Outsourcing",
    attributes: {
        subtitle: {type: "string"},
        heading: {type: "string"},
        textContent: {type: "string"},
        imgID: {type: "number"},
        imgURL: {type: "string"}
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {
    function setSubtitle(newSubtitle) {
        props.setAttributes({subtitle: newSubtitle})
    }

    function setHeading(newHeading) {
        props.setAttributes({heading: newHeading})
    }

    function setTextContent(newTextContent) {
        props.setAttributes({textContent: newTextContent})
    }

    useEffect(function() {
        async function go() {
            const response = await apiFetch({
                path: `/wp/v2/media/${props.attributes.imgID}`,
                method: "GET"
            })
            props.setAttributes({imgURL: response.media_details.sizes.hero.source_url})
        }
        go()
    }, [props.attributes.imgID])

    function onFileSelect(newImage) {
        props.setAttributes({imgID: newImage.id})
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Image" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={props.attributes.imgID}
                                render={({open}) => {
                                    return <Button onClick={open}>Choose Image</Button>
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <section className="hero hero--why-outsource">
                <div className="subsection-container image-with-background image-with-background--why-outsource">
                    <div className="gradient-box" data-aos="fade-down-right" data-aos-delay="400" />
                    <picture className="main-image" data-aos="zoom-out" data-aos-delay="400">
                        <img src={props.attributes.imgURL} />
                    </picture>
                    <picture className="optional-image" data-aos="fade-up-left" data-aos-delay="400">
                        <img src="/wp-content/themes/rekru-block/assets/why-outsource/why-dots.jpg" />
                    </picture>
                </div>
                <div className="subsection-container subsection-container--text">
                    <RichText tagName="h2" className={"section-title"}  value={props.attributes.heading} onChange={setHeading} />
                    <RichText tagName="p" className={"paragraph paragraph--medium"}  value={props.attributes.textContent} onChange={setTextContent} />
                    <RichText tagName="span" className={"subtitle subtitle--arrow"}  value={props.attributes.subtitle} onChange={setSubtitle} />
                    <ul>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Open
                            communication</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Customized
                            planning process</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Costs cut while
                            maintaining high quality</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Advanced tools and
                            technologies</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Streamlined
                            information flow</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Regular
                            performance reviews</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Meeting the
                            timeline requirements</p></li>
                        <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Dedicated team of
                            professionals</p></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

function SaveComponent(props) {
    return (
        <section className="hero hero--why-outsource">
            <div className="subsection-container image-with-background image-with-background--why-outsource">
                <div className="gradient-box" data-aos="fade-down-right" data-aos-delay="400" />
                <picture className="main-image" data-aos="zoom-out" data-aos-delay="400">
                    <img src={props.attributes.imgURL} />
                </picture>
                <picture className="optional-image" data-aos="fade-up-left" data-aos-delay="400">
                    <img src="/wp-content/themes/rekru-block/assets/why-outsource/why-dots.jpg" />
                </picture>
            </div>
            <div className="subsection-container subsection-container--text">
                <h2 className="section-title">{props.attributes.heading}</h2>
                <p className="paragraph paragraph--medium">{props.attributes.textContent}</p>
                <span className="subtitle subtitle--arrow">{props.attributes.subtitle}</span>
                <ul>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Open
                        communication</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Customized
                        planning process</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Costs cut while
                        maintaining high quality</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Advanced tools and
                        technologies</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Streamlined
                        information flow</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Regular
                        performance reviews</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-left" data-aos-delay="250">Meeting the
                        timeline requirements</p></li>
                    <li><p className="paragraph paragraph--medium" data-aos="fade-right" data-aos-delay="250">Dedicated team of
                        professionals</p></li>
                </ul>
            </div>
        </section>
    )
}