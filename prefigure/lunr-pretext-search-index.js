var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Website   copyright  "
},
{
  "id": "sec-example",
  "level": "1",
  "url": "sec-example.html",
  "type": "Section",
  "number": "1.1",
  "title": "An example diagram",
  "body": " An example diagram   contains a diagram that could appear in a calculus textook and that is authored in PreFigure.   A calculus diagram created with PreFigure      Like PreTeXt , PreFigure is a markup language that is designed to reflect the structure of mathematical diagrams. The PreFigure source for creating this diagram is given in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source to produce    PreFigure provides an XML vocabulary that allows an author to describe the components of a mathematical diagram and how they relate to one another in an intuitive way. The <diagram> element delimits all of the PreFigure input.  Notice that the graphical components of the diagram in include a grid, two axes, the graph of a function, the tangent line to the function at some point, and the point itself. The PreFigure source includes an XML element for each of these components.  The <coordinates> element defines our window into the -plane while the label is included inside the <point> element to which it is attached and wrapped in an <m> element so that it will be processed by MathJax.  In addition, authors may define mathematical objects, such as a real number and a function , which are to be used in the construction of subsequent graphical components.  Following the PreTeXt paradigm, PreFigure makes stylistic decisions about the appearance of graphical components so that authors can focus on the structure of their diagram. Authors can, however, override these decisions to modify the visual appearance of a diagram. Authors may also provide a publisher file setting their own defaults so that, for instance, all the diagrams in a textbook have a common visual style (yet to be implemented).  PreFigure XML source is processed by a Python package to create output images in the SVG format. As a result, diagrams will scale to an appropriate size when included in a document without sacrifiing quality or visual information.  "
},
{
  "id": "diagram-tangent",
  "level": "2",
  "url": "sec-example.html#diagram-tangent",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A calculus diagram created with PreFigure     "
},
{
  "id": "listing-tangent",
  "level": "2",
  "url": "sec-example.html#listing-tangent",
  "type": "Listing",
  "number": "1.1.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source to produce   "
},
{
  "id": "sec-accessibility",
  "level": "1",
  "url": "sec-accessibility.html",
  "type": "Section",
  "number": "1.2",
  "title": "Accessibility",
  "body": " Accessibility  PreFigure prioritizes the creation of accessible mathematical diagrams. In particular, authors can easily include annotations that control how a reader can navigate a diagram using a screen reader.      An annotated version of    (To be implemented) A reader may explore using a screen reader by first sending the focus to the diagram by either clicking in the diagram or pressing the tab key sufficiently many times. The arrow keys are then used to explore the diagram in more detail. For instance, the Down and Up arrow keys produce more or less detail while the Left and Right arrow keys focus on components at the same level. The annotations are read using the diagcess library created by Volker Sorge .  The modifications to the PreFigure source needed to produce the annotations are shown in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>  The PreFigure source for the annotated diagram    Notice that important graphical components are given an at attribute, which serves as a handle to be used by the annotations. The <annotations> element contains a tree of <annotations> whose structure specifies how the screen reader will respond to arrow presses. An <annotation> element contains a reference to the handle of a graphical component, which specifies how the components are highlighted.  Furthermore, as seen in authors can create, from the same XML source, tactile versions of diagrams, including braille labels, suitable for embossing and including in a braille document.      A tactile version produced from the XML source in .   Indeed, the difficulty in creating tactile diagrams that emboss well was one of the original motivations of the PreFigure project.  "
},
{
  "id": "diagram-tangent-annotate",
  "level": "2",
  "url": "sec-accessibility.html#diagram-tangent-annotate",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "    An annotated version of   "
},
{
  "id": "listing-tangent-annotate",
  "level": "2",
  "url": "sec-accessibility.html#listing-tangent-annotate",
  "type": "Listing",
  "number": "1.2.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>  The PreFigure source for the annotated diagram   "
},
{
  "id": "diagram-tangent-tactile",
  "level": "2",
  "url": "sec-accessibility.html#diagram-tangent-tactile",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "    A tactile version produced from the XML source in .  "
},
{
  "id": "sec-gallery",
  "level": "1",
  "url": "sec-gallery.html",
  "type": "Section",
  "number": "1.3",
  "title": "A gallery of diagrams",
  "body": " A gallery of diagrams  We include a sampling of diagrams created with PreFigure to give a sense of the possibilities.                     "
},
{
  "id": "sec-gallery-3",
  "level": "2",
  "url": "sec-gallery.html#sec-gallery-3",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "                  "
},
{
  "id": "sec-installation",
  "level": "1",
  "url": "sec-installation.html",
  "type": "Section",
  "number": "1.4",
  "title": "Installation and use",
  "body": " Installation and use  PreFigure, which is written in the Python programming language, may be installed by visiting the GitHub repository and following the installation instructions given there.  Once again, PreFigure can be called from the command line. If foo.xml contains a PreFigure XML diagram description, then   python parse.py foo.xml   will create the output files output\/foo.svg and output\/foo.xml , where the second is an XML file used by a screen reader to navigate the diagram with the arrow keys. To create a tactile version of the diagram, use   python parse.py -f tactile foo.xml   "
},
{
  "id": "sec-diagram",
  "level": "1",
  "url": "sec-diagram.html",
  "type": "Section",
  "number": "2.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><diagram><\/code>element",
  "body": " The <diagram> element  Every PreFigure XML description is contained within a <diagram> element. The required dimensions attribute determines the dimensions of the drawing surface in SVG coordinates. For instance, dimensions=\"(300, 200)\" sets up a drawing surface that is 300 units wide and 200 units high.  Authors may additionally use a margins attribute to add some space around the drawing surface into which some components of the diagram, perhaps a label, may spill. By default, margins are set to 0. However, margins=\"5\" adds a margin of 5 units around all four sides of the drawing surface. Specifying margins=\"(20, 5, 10, 15)\" adds 20 units to the left, 5 to the bottom, 10 to the right, and 15 to the top.  Of course, SVG images scale well so we could, in principle, create diagrams of whatever size we wish and assume they will be scaled appropriately when placed in a surrounding document. However, when an SVG image is scaled, all the dimensions in the image, such as the thickness of lines and the size of labels, are scaled as well. It is therefore a good practice to set the dimensions to something roughly similar to what you hope to see in your document. Declaring that dimensions=\"(300, 300)\" produces an image whose labels closely match the size of surrounding text when included in a PreTeXt document.  Similarly, setting the margins to some positive value means that lines drawn on the boundary of the drawing surface are not unintentionally clipped. The diagram shown in was constructed with margins=\"0\" . Some of the grid lines appear on the boundary of the drawing surface and we only see the half of those lines that are in the drawing surface. This effect is apparent even in lines that are relatively thin.      A grid drawn without margins   "
},
{
  "id": "diagram-margins",
  "level": "2",
  "url": "sec-diagram.html#diagram-margins",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "    A grid drawn without margins  "
},
{
  "id": "sec-coordinates",
  "level": "1",
  "url": "sec-coordinates.html",
  "type": "Section",
  "number": "2.2",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><coordinates><\/code> element",
  "body": " The <coordinates> element  Once the dimensions of the diagram are established in the opening <diagram> element, there is a default coordinate system provided. For instance, if we begin with <diagram\n    dimensions=\"(300, 200)\" margins=\"10\"> , we obtain a coordinate system as shown in .      The default coordinate system   Some authors may know that SVG's internal coordinate system places the origin in the upper-left corner of the image and the positive -axis points down. PreFigure, however, encourages authors to think mathematically so that all graphical components are described in terms of a mathematical coordinate system, such as that shown in . PreFigure will handle the necessary coordinate transforms between mathematical coordinates and SVG's internal coordinate system.  It is possible to describe diagrams using the default coordinate system seen in . More likely, however, an author intends us to view a specific region in the Cartesian plane. The <coordinates> element allows us to set a mathematical bounding box that lies over the drawing surface. For instance, <coordinates bbox=\"(-3,-2,9,6)\"> results in the coordinate system shown in . Any elements placed under this <coordinates> element will be drawn in this coordinate system.      A mathematical coordinate system defined using a < coordinates> element   This use of <coordinates> is possibly all you will ever use. However, a <coordinates> element can be given a destination attribute that describes a region inside the current bounding box where the new bounding box should reside. For example, the PreFigure source in produces two rectangles placed side by side as seen in     <diagram dimensions=\"(410, 200)\" margins=\"5\"> <coordinates bbox=\"(0,0,1,1)\" destination=\"(0,0,200,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"blue\"\/> <\/coordinates> <coordinates bbox=\"(0,0,1,1)\" destination=\"(210,0,410,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for        The use of two coordinate systems   There are some appropriate applications of this construction, such as diagrams that describe functions from the plane to the plane as you might see in linear algebra or complex analysis. However, this use of <coordinates> is generally discouraged. If you intend to place two, possibly related diagrams side by side in a PreTeXt document, you should create two separate diagrams and place them next to each other using a <sidebyside> . This is particularly important for the production of braille documents from PreTeXt source.  A second, possibly more legitimate, use of <coordinates> elements is to nest one inside another. For instance, we may wish to zoom in on a region in the diagram, as shown in       Using coordinate systems to zoom   The PreFigure source is given in . The background coordinate system is established by the <coordinate> element in Line 5. Then we include a few graphical components, such as the graph, tangent line, and point, drawn in that coordinate system. Then a second, nested <coordinate> element appears in Line 12 and we draw the graph, tangent line, and point again in the new coordinate system.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=3-x^2\/2<\/definition> <definition>a=1<\/definition> <definition>side=0.5<\/definition> <coordinates bbox=\"(0,0,4,4)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\"\/> <coordinates bbox=\"(a-side\/2,f(a)-side\/2,a+side\/2,f(a)+side\/2)\" destination=\"(2.25,2.25,3.75,3.75)\"> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\" fill=\"white\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <\/coordinates> <\/coordinates> <\/diagram>   The PreFigure source for    "
},
{
  "id": "diagram-coordinates",
  "level": "2",
  "url": "sec-coordinates.html#diagram-coordinates",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "    The default coordinate system  "
},
{
  "id": "diagram-coordinates-2",
  "level": "2",
  "url": "sec-coordinates.html#diagram-coordinates-2",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": "    A mathematical coordinate system defined using a < coordinates> element  "
},
{
  "id": "listing-sidebyside",
  "level": "2",
  "url": "sec-coordinates.html#listing-sidebyside",
  "type": "Listing",
  "number": "2.2.3",
  "title": "",
  "body": "  <diagram dimensions=\"(410, 200)\" margins=\"5\"> <coordinates bbox=\"(0,0,1,1)\" destination=\"(0,0,200,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"blue\"\/> <\/coordinates> <coordinates bbox=\"(0,0,1,1)\" destination=\"(210,0,410,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "diagram-sidebyside",
  "level": "2",
  "url": "sec-coordinates.html#diagram-sidebyside",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": "    The use of two coordinate systems  "
},
{
  "id": "diagram-zoom",
  "level": "2",
  "url": "sec-coordinates.html#diagram-zoom",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": "    Using coordinate systems to zoom  "
},
{
  "id": "listing-zoom",
  "level": "2",
  "url": "sec-coordinates.html#listing-zoom",
  "type": "Listing",
  "number": "2.2.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=3-x^2\/2<\/definition> <definition>a=1<\/definition> <definition>side=0.5<\/definition> <coordinates bbox=\"(0,0,4,4)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\"\/> <coordinates bbox=\"(a-side\/2,f(a)-side\/2,a+side\/2,f(a)+side\/2)\" destination=\"(2.25,2.25,3.75,3.75)\"> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\" fill=\"white\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <\/coordinates> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "sec-definition",
  "level": "1",
  "url": "sec-definition.html",
  "type": "Section",
  "number": "2.3",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><definition><\/code> element and user namespace",
  "body": " The <definition> element and user namespace  Most diagrams will contain some graphical components that are related to one another. For instance, our example diagram in contains the tangent line to a graph at a point and the point .      The example from   To help coordinate these relationships, PreFigure provides authors with a namespace in which to store important pieces of data (this is not to be confused with an XML namespace). The PreText source is again given in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source   Notice that Line 2 includes an element that defines a quantity . This has the effect of assigning the value to the symbol a and provides the capability to refer to this symbol again in later elements. For example, Lines 7 and 8 introduce the tangent line and the point in terms of a .  Furthermore, Line 3 includes the definition of the function that is reused in constructing both the graph and the tangent line.  Behind the scenes, everything to the right of the equals sign in a <definition> is interpreted as an expression from a small subset of the Python programming language with the exception that a ^ is interpreted as exponentation. Expressions are validated to make sure they do not introduce malicious code.  The left side of the equals sign is interpreted as a symbol that refers to the result of evaluating the expression on the right side of the equals sign.  Lists and tuples are interpreted as numpy arrays, which enables authors to perform vector operations. Matrix multiplication is represented by @ . demonstrates with a linear combination of two vectors.      A linear combination of vectors   The PreFigure source is shown in . Notice how the vectors and are defined and then combined in Line 4 to form the vector comb .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>v=(2,-1)<\/definition> <definition>w=(-2,3)<\/definition> <definition>comb=2*v+w<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes\/> <vector v=\"v\"\/> <vector v=\"w\"\/> <vector v=\"comb\" stroke=\"red\"\/> <label p=\"v\" alignment=\"se\"><m>{\\mathbf v}<\/m><\/label> <label p=\"w\" alignment=\"ne\"><m>{\\mathbf w}<\/m><\/label> <label p=\"comb\" alignment=\"ne\"><m>2{\\mathbf v}+{\\mathbf w}<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for    Another type of definition is given by the <derivative> tag as demonstrated by the following diagram and its PreFigure source.      A function and its derivative     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3-3*x+1<\/definition> <derivative name=\"fp\" function=\"f\"\/> <coordinates bbox=\"(-3,-3,3,3)\"> <grid-axes\/> <graph function=\"f\"\/> <graph function=\"fp\" stroke=\"green\"\/> <label p=\"(1.8,f(1.8))\" alignment=\"se\"><m>f(x)<\/m><\/label> <label p=\"(0.5,fp(0.5))\" alignment=\"se\"><m>f'(x)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for    "
},
{
  "id": "diagram-tangent-2",
  "level": "2",
  "url": "sec-definition.html#diagram-tangent-2",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "    The example from  "
},
{
  "id": "listing-tangent-2",
  "level": "2",
  "url": "sec-definition.html#listing-tangent-2",
  "type": "Listing",
  "number": "2.3.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source  "
},
{
  "id": "diagram-linear-comb",
  "level": "2",
  "url": "sec-definition.html#diagram-linear-comb",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "    A linear combination of vectors  "
},
{
  "id": "listing-linear-comb",
  "level": "2",
  "url": "sec-definition.html#listing-linear-comb",
  "type": "Listing",
  "number": "2.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>v=(2,-1)<\/definition> <definition>w=(-2,3)<\/definition> <definition>comb=2*v+w<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes\/> <vector v=\"v\"\/> <vector v=\"w\"\/> <vector v=\"comb\" stroke=\"red\"\/> <label p=\"v\" alignment=\"se\"><m>{\\mathbf v}<\/m><\/label> <label p=\"w\" alignment=\"ne\"><m>{\\mathbf w}<\/m><\/label> <label p=\"comb\" alignment=\"ne\"><m>2{\\mathbf v}+{\\mathbf w}<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "diagram-derivative",
  "level": "2",
  "url": "sec-definition.html#diagram-derivative",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": "    A function and its derivative  "
},
{
  "id": "listing-derivative",
  "level": "2",
  "url": "sec-definition.html#listing-derivative",
  "type": "Listing",
  "number": "2.3.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3-3*x+1<\/definition> <derivative name=\"fp\" function=\"f\"\/> <coordinates bbox=\"(-3,-3,3,3)\"> <grid-axes\/> <graph function=\"f\"\/> <graph function=\"fp\" stroke=\"green\"\/> <label p=\"(1.8,f(1.8))\" alignment=\"se\"><m>f(x)<\/m><\/label> <label p=\"(0.5,fp(0.5))\" alignment=\"se\"><m>f'(x)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "sec-graphical-attr",
  "level": "1",
  "url": "sec-graphical-attr.html",
  "type": "Section",
  "number": "3.1",
  "title": "General attributes",
  "body": " General attributes   We begin this chapter with a discussion of attributes common to all graphical elements. Many attributes modify properties that are either - or -dimensional. For instance, a <graph> will consist of a curve with an attribute stroke that determines its color. A <polygon> also has a stroke attribute that determines the color of the boundary of the polygon. It also has a fill attribute that determines the color used to shade the -dimensional region enclosed by the <polygon> .    Colors  There are several ways to specify a color, the most simple being to use its name, such as stroke=\"blue\" . Alternatively, one may specify the red, green, and blue components either in hexadecimal, fill=\"#rrggbb\" or fill=\"#rgb\" , or decimal, fill=\"rgb(r,g,b)\" , where each value is between 0 and 255. Some examples are shown in .      Some color choices   Color should be used judiciously, and the colors used in a single diagram should contrast highly with one another. If you find that you are using a lot of colors, perhaps the idea you are communicating could be better expressed in another way, such as a series of linked diagrams.    Stroke attributes  The two most important attributes you will use are stroke and thickness . All the possible stroke attributes are described here roughly in order of importance. You will likely never need the attributes toward the end of this list.   Stroke  The stroke attribute determines the color used to draw -dimensional components, as demonstrated in . For instance, stroke=\"blue\" will cause the -dimensional component of the element to be rendered in blue. If the attribute has the value stroke=\"none\" , then the -dimensional component of the element will not appear.  Note that tactile diagrams are rendered with stroke=\"black\" to guarantee predictable behavior when embossed.   Thickness  The attribute thickness determines the width of the -dimensional component in SVG coordinates. That is, if a graphical element has the attribute thickiness=\"1\" in a diagram whose dimensions are , then the width of the corresponding graphical component will be of size of the diagram. demonstrates different thicknesses.      Stroking with various thicknesses    Many graphical elements, such as graph and lines, have a default @thickness=2 .  Dash  Use the dash attribute to create dashed lines as shown in .      Dashed lines   In a tactile diagram, the dash attribute is useful for distinguishing different graphical components. Feedback from users indicates that dash=\"9 9\" is a good choice as the dashes and spaces are of an inch.   Opacity  Transparency is available using the opacity attribute. The value should be between 0.0 and 1.0 with 1.0, the default, being entirely opaque. This attribute applied to both the stroke and fill of a graphical component. If the opacity is meant to be applied to only the stroke, use stroke-opacity .      These lines have stroke=\"blue\" and varying opacities    Miterlimit  On rare occasions, you may find that you need to adjust the miterlimit attribute. As seen in , it sometimes happens that a small angle produces a sharp point. The point can be removed by lowering the miterlimit attribute from its default value of 4.      Lowering the miterlimit causes sharp points to be blunted    Linejoin  The linejoin attribute determines how lines are joined. The default value is linejoin=\"miter\" , whose behavior is controlled with the miterlimit attribute described above. However, this can be changed as shown in .      Various choices for the linejoin attribute    Linecap  The linecap attribute determines how lines are capped at their ends. The default value is linecap=\"butt\" with the other options shown in . The option linecap=\"square\" causes a square to added to the end of the line, which extends it slightly.      Options for linecap       Fill attributes  Similarly, there are a few attributes to describe the properties used to fill a region.   Fill  The fill specifies the color used to fill a region, as seen in .      Squares filled with fill=\"red\" , blue, and green.   Tactile diagrams are rendered with fill=\"lightgray\" to create a consistent texture.   Fill opacity  The fill-opacity attribute provides a given degree of transparency, as demonstrated in .      Squares filled with fill-opacity=\"1.0\" , 0.6, and 0.2.    Fill rule  The fill-rule attribute determines how more complicated regions are filled, as demonstrated in .      Squares filled with fill-rule=\"nonzero\" , the default, and evenodd.       Handles  In , we described how graphical elements can have an identifying handle, given by the value of its at attribute, by which they may be referenced from within an annotation. For instance, at=\"function-f\" provides an identification of this graphical element.  If you look inside an SVG image file created by PreFigure, you will see that the handles are converted into id attributes, and it is perfectly fine to use id=\"function-f\" rather than the at attribute. The at attribute is provided to avoid any confusion with xml:id attributes.  As we now begin to describe different types of graphical components, we will sometimes need to describe how a component's handle is processed.   "
},
{
  "id": "diagram-stroke",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-stroke",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "    Some color choices  "
},
{
  "id": "diagram-thickness",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-thickness",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "    Stroking with various thicknesses  "
},
{
  "id": "diagram-dash",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-dash",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": "    Dashed lines  "
},
{
  "id": "diagram-opacity",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-opacity",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": "    These lines have stroke=\"blue\" and varying opacities  "
},
{
  "id": "diagram-miterlimit",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-miterlimit",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": "    Lowering the miterlimit causes sharp points to be blunted  "
},
{
  "id": "diagram-linejoin",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-linejoin",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": "    Various choices for the linejoin attribute  "
},
{
  "id": "diagram-linecap",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-linecap",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": "    Options for linecap  "
},
{
  "id": "diagram-fill",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": "    Squares filled with fill=\"red\" , blue, and green.  "
},
{
  "id": "diagram-fill-opacity",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill-opacity",
  "type": "Figure",
  "number": "3.1.9",
  "title": "",
  "body": "    Squares filled with fill-opacity=\"1.0\" , 0.6, and 0.2.  "
},
{
  "id": "diagram-fill-rule",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill-rule",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": "    Squares filled with fill-rule=\"nonzero\" , the default, and evenodd.  "
},
{
  "id": "sec-outlining",
  "level": "1",
  "url": "sec-outlining.html",
  "type": "Section",
  "number": "3.2",
  "title": "Outlining and <code class=\"code-inline tex2jax_ignore\"><group><\/code>s",
  "body": " Outlining and <group> s   On occasion, you may want a graphical component, such as the graph of a function or a point, to stand out from the background. This can be accomplished using the outline attribute. In fact, all components of a tactile diagram are automatically outlined.  In some sense, this section is about another stroke characteristic. However, the ability to outline informs some PreFigure design features that open up some new possibilities.    Outlining  To place an outline behind a component, set the attribute outline=\"yes\" . In , both the graph and the point have been outlined, which produces some white space around each element.      Outlining a graph and a point     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>a=1<\/definition> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <rectangle center=\"(0,0)\" dimensions=\"(8,8)\" fill=\"lightgray\"\/> <graph function=\"f\" outline=\"yes\"\/> <point p=\"(a,f(a))\" size=\"10\" outline=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   The outlines produced in tactile diagrams, which are added regardless of the value of outline , are of an inch, as demonstrated in .      The tactile version of .     Groups  When a component is stroked or filled, the paint applied covers up anything that has already been painted in the overlap. For tactile diagrams especially, this can lead to some undesirable behavior, as seen in . Here we see two solutions to a differential equation. Notice how the outline of one solution obscures the second and the fact that these two solutions have the same asymptotic behavior.      Two solutions to a differential equation rendered tactilely.   PreFigure's <group> element provides an alternative. More specifically, it allows us to group components together and place all their outlines before placing the components themselves. shows a different version of the previous diagram in which the two solutions have been included in a <group> element.      Employing a group to control outlining.   gives the PreFigure source for . Notce how the two solution curves are placed in a <group> , which is given the attribute outline=\"always\" . This has the effect of drawing all the outlines in the group first and then drawing all the components. The value always causes this behavior regardless of the output format. Setting outline=\"tactile\" requests this behavior only for tactile diagrams.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(y,t)=t-y<\/definition> <coordinates bbox=\"(-1,-1,4,4)\"> <grid-axes\/> <group outline=\"always\"> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" domain=\"[0,4]\" outline=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"2\" domain=\"[0,4]\" outline=\"yes\"\/> <\/group> <point p=\"(0,2)\"\/> <point p=\"(0,0)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A second reason to group elements together is to facilitate annotations. A <group> element can be given a handle and then annotated as in . When the focus goes to this node of the annotation tree, the screen reader will zoom in on the region containing both the line and the label.    <group at=\"line-L1\"> <line endpoints=\"((-2,1),(2,2))\"\/> <label p=\"(2,2)\"> <m>L_1<\/m> <\/label> <\/group> ... <annotations> ... <annotation ref=\"line-L1\" text=\"The first line\"\/> ... <\/annotations>    Groups provide a means of organizing the graphical components in a diagram that reflects the structure of the diagram. Behind the scenes, for instance, a grid is a collection of lines that are placed in a group since we wish to call attention to the collection rather than each individual line.   "
},
{
  "id": "diagram-outline",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "    Outlining a graph and a point  "
},
{
  "id": "listing-outline",
  "level": "2",
  "url": "sec-outlining.html#listing-outline",
  "type": "Listing",
  "number": "3.2.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>a=1<\/definition> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <rectangle center=\"(0,0)\" dimensions=\"(8,8)\" fill=\"lightgray\"\/> <graph function=\"f\" outline=\"yes\"\/> <point p=\"(a,f(a))\" size=\"10\" outline=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-outline-tactile",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-tactile",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": "    The tactile version of .  "
},
{
  "id": "diagram-outline-de",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-de",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": "    Two solutions to a differential equation rendered tactilely.  "
},
{
  "id": "diagram-outline-group",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-group",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": "    Employing a group to control outlining.  "
},
{
  "id": "listing-outline-group",
  "level": "2",
  "url": "sec-outlining.html#listing-outline-group",
  "type": "Listing",
  "number": "3.2.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(y,t)=t-y<\/definition> <coordinates bbox=\"(-1,-1,4,4)\"> <grid-axes\/> <group outline=\"always\"> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" domain=\"[0,4]\" outline=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"2\" domain=\"[0,4]\" outline=\"yes\"\/> <\/group> <point p=\"(0,2)\"\/> <point p=\"(0,0)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "listing-group-handle",
  "level": "2",
  "url": "sec-outlining.html#listing-group-handle",
  "type": "Listing",
  "number": "3.2.7",
  "title": "",
  "body": "  <group at=\"line-L1\"> <line endpoints=\"((-2,1),(2,2))\"\/> <label p=\"(2,2)\"> <m>L_1<\/m> <\/label> <\/group> ... <annotations> ... <annotation ref=\"line-L1\" text=\"The first line\"\/> ... <\/annotations>   "
},
{
  "id": "sec-grid-axes",
  "level": "1",
  "url": "sec-grid-axes.html",
  "type": "Section",
  "number": "3.3",
  "title": "Grid and Axes",
  "body": " Grid and Axes   We'll begin our discussion of graphical elements by looking at grids and axes, which will typically be in the background of a diagram. Since these are commonly used elements, there are many features that can be customized by an author.    <grid-axes>  The simplest way to include a grid and axes in a diagram is with the <grid-axes> element, which is demonstrated in .      The use of a <grid-axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that PreFigure makes choices about the spacing of the grid lines and the locations at which labels are added to the axes. All of these features can be modified as will be described in the next two subsections, and .  The xlabel and ylabel tags are optional but provide a simple way to label the axes. We will have a lot more to say about labels later, but these particular labels will be processed by MathJax as if they were contained in an m element.  We will also discuss annotations in more depth later, but it is worth mentioning now that a <grid-axes> element will automatically annotate itself as the first component in the annotation tree.    Grids  The <grid> element provides a grid without adding axes. Without any attributes, this element will choose horizontal and vertical spacings and draw the grid lines stroke=\"lightgray\" and thickness=\"1\" . The stroke attributes can be modified as can the spacings using the spacings attribute. The value of the spacings consists of two lists, one for each of the horizontal and vertical grid lines, with each list having the form (start, space, end) . provides an example.      The attributes of a <grid> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Including a basis attribute will produce a grid drawn in the given basis, as shown in .      The result of basis=\"((2,1),(1,2))\" .   When included in a <grid-axes> element, these attributes will be inherited by the resulting grid.    Axes  Axes are a bit more involved since there is a wider range of properties they possess. For instance, an <axes> tag with no attributes will produce axes similar to those seen in . In addition to the axes, we see that there are tick marks and labels as well. The positions of the tick marks and labels are automatically generated.      An <axes> element without attributes.   There are attributes that may be used to change this default behavior.  decorations  Setting decorations=\"no\" suppresses the automatic inclusion of tick marks and labels and produces unadorned axes. Regardless of the value of this attribute, features may be customized and added to the axes by including some of the following attributes.   xlabel and ylabel  As we have seen xlabel=\"t\" and ylabel=\"f(t)\" will place labels on the horizontal and vertical axes. These labels will be automatically wrapped in <m> elements and processed as latex by MathJax.   hticks and vticks  These attributes specify the position of tick marks on the axes. For instance, hticks=\"(-2,2,4)\" will place tick marks on the horizontal axis beginning at -2 and ending at 4 with a spacing of two units.   hlabels and vlabels  These attributes are similar to hticks and vticks except they specify the position of labels on the axes.   arrows  Arrows may be placed on ends of the axes by setting the arrows attribute. If arrows=\"1\" , then arrows will be included in the direction of increasing coordinates. arrows=\"2\" includes arrows at each end of the axes.     illustrates the use of some of these attributes.      The effect of some attributes of an <axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <axes xlabel=\"\\alpha\" ylabel=\"g(\\alpha)\" hticks=\"(-2,1,5)\" hlabels=\"(-2,1,5)\" arrows=\"1\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   As with grids, these attributes may be included in a <grid-axes> element and inherited by the resulting axes.   "
},
{
  "id": "diagram-grid-axes",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid-axes",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "    The use of a <grid-axes> element.  "
},
{
  "id": "subsec-grid-axes-4",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-axes-4",
  "type": "Listing",
  "number": "3.3.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": "    The attributes of a <grid> element.  "
},
{
  "id": "subsec-grid-4",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-4",
  "type": "Listing",
  "number": "3.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid-basis",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid-basis",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": "    The result of basis=\"((2,1),(1,2))\" .  "
},
{
  "id": "diagram-axes",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": "    An <axes> element without attributes.  "
},
{
  "id": "diagram-axes-example",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes-example",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": "    The effect of some attributes of an <axes> element.  "
},
{
  "id": "subsec-axes-7",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-axes-7",
  "type": "Listing",
  "number": "3.3.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <axes xlabel=\"\\alpha\" ylabel=\"g(\\alpha)\" hticks=\"(-2,1,5)\" hlabels=\"(-2,1,5)\" arrows=\"1\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-labels",
  "level": "1",
  "url": "sec-labels.html",
  "type": "Section",
  "number": "3.4",
  "title": "Labels",
  "body": " Labels  The <label> element provides a way of adding text to a diagram. Labels are composed of plain text, mathematics, or a combination of both. Mathematics is written in latex and enclosed in an <m> element. demonstrates some possibilities with the PreFigure source given in .      Some sample labels.     <diagram dimensions=\"(250,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\"> <label anchor=\"(1,3)\" alignment=\"east\"> <m>\\displaystyle f(a)=\\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}~dz<\/m> <\/label> <label anchor=\"(1,2)\" alignment=\"east\"> Temperature <\/label> <label anchor=\"(0.5,1)\" alignment=\"east\" rotate=\"90\" scale=\"1.5\"> Time <m>t<\/m> (sec) <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   Here are some important attributes that determine the placement of labels.  anchor  The label is placed relative to an anchor point with the default being anchor=\"(0,0)\" .   alignment  The alignment attribute specifies how the label is positioned relative to the anchor point. demonstrates the nine possibilities. Each alignment has a 1- or 2-character abbreviation so, for example, alignment=\"se\" is equivalent to alignment=\"southeast\" .      Aligning text to an anchor point.    offset  PreFigure inclues some padding between the anchor and the label, but you will sometimes find that you need to fine tune the position of a label using the offset label. Stating offset=\"(2,-3)\" will move the label two SVG units to the right and three units down from the position determined by the anchor and the alignment.   clear-background  Setting clear-background=\"yes\" causes a white rectangle to be filled behind the label so that it stands out from the background, as seen in .      Setting clear-background=\"yes\"    scale, rotate  As illustrated in , labels can be scaled and rotated.     We remind authors of one exception in that the xlabel and ylabel attributes of an <axes> element are interpreted as latex expressions and automatically wrapped in an <m> element.  Authors should think carefully about the use of labels in their diagrams. In particular, it can be tempting to include lots of labels, possibly even long, complicated labels, in a diagram. However, diagrams should always be carefully integrated into a larger document, which means that the surrounding exposition and caption should help readers interpret the meaning of a diagram. Labels should mainly refer to graphical components and serve as a connection to the surrounding text. This is especially important for the production of tactile diagrams, in which labels that appear relatively short in print can become quite long when parsed into Nemeth braille. So even though Cauchy's formula is indeed beautiful, you should never include it in a diagram.  "
},
{
  "id": "diagram-label-example",
  "level": "2",
  "url": "sec-labels.html#diagram-label-example",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "    Some sample labels.  "
},
{
  "id": "listing-label-example",
  "level": "2",
  "url": "sec-labels.html#listing-label-example",
  "type": "Listing",
  "number": "3.4.2",
  "title": "",
  "body": "  <diagram dimensions=\"(250,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\"> <label anchor=\"(1,3)\" alignment=\"east\"> <m>\\displaystyle f(a)=\\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}~dz<\/m> <\/label> <label anchor=\"(1,2)\" alignment=\"east\"> Temperature <\/label> <label anchor=\"(0.5,1)\" alignment=\"east\" rotate=\"90\" scale=\"1.5\"> Time <m>t<\/m> (sec) <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-alignments",
  "level": "2",
  "url": "sec-labels.html#diagram-alignments",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "    Aligning text to an anchor point.  "
},
{
  "id": "diagram-clear-background",
  "level": "2",
  "url": "sec-labels.html#diagram-clear-background",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": "    Setting clear-background=\"yes\"  "
},
{
  "id": "sec-simple",
  "level": "1",
  "url": "sec-simple.html",
  "type": "Section",
  "number": "3.5",
  "title": "Points, lines, and polygons",
  "body": " Points, lines, and polygons   In this section, we will begin to introduce some simple graphical components, such as points, lines, vectors, and polygons.    Points  shows a collection of points and various attributes describing them. The PreFigure source follows in .      A collection of points.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0, 0,5, 5)\"> <point p=\"(1,4)\" size=\"20\" style=\"box\" fill=\"green\" stroke=\"black\" thickness=\"4\"\/> <point p=\"(2.5, 2.5)\" size=\"15\" style=\"diamond\" fill=\"blue\" stroke=\"none\"\/> <point p=\"(3,1)\" size=\"10\"> <m>(a,(f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source for .   In the usual way, a point will have stroke and fill attributes. There are additional attributes that specify its appearance.  p  The p gives the location at which the point will be centered.   style  This attribute controls the shape of the point. There are three options: style=\"box\", \"diamond\", \"circle\" with \"circle\" being the default.   size  This attribute specifies the size of the point in SVG units.     Notice that a label may be attached to a point by including the label's text within the <point> element. In this case, attributes may be added to the point, such as alignment and offset , to control the positioning of the label. Behind the scenes, the label and point are placed within a <group> element, and the point's handle transferred to the <group> for annotating.    Lines  A few lines are shown in with the PreFigure source presented in .      A collection of lines.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,5)\"> <grid\/> <line endpoints=\"((1,4), (4,4.5))\" stroke=\"blue\" thickness=\"5\" arrows=\"1\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" stroke=\"lightgray\" thickness=\"20\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" endpoint-offsets=\"(10, -5)\" thickness=\"5\"\/> <line endpoints=\"((1,1.5),(4,2))\" stroke=\"green\" infinite=\"yes\"\/> <definition>p1=(1,1)<\/definition> <definition>p2=(4.5,0.5)<\/definition> <line endpoints=\"(p1,p2)\" endpoint-offsets=\"((10,0), (-10,0))\"\/> <label p=\"p1\" clear-background=\"yes\"><m>a<\/m><\/label> <label p=\"p2\" clear-background=\"yes\"><m>b<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   Any stroke attributes can be added to a line though fill attributes do no apply.  endpoints  The endpoints of a line may be specified together using the endpoints attribute or separately using p1 and p2 .   infinite  If infinite=\"yes\" , then the line is drawn as if it were infinite in extent.   arrows  If arrows=\"1\" , then an arrow is drawn at the second endpoint. If arrows=\"2\" , then an arrow is drawn at both endpoints.   endpoint-offsets  Sometimes you may want the line to begin or end near, but not exactly, at the given endpoints. The bottom line in is an example in that the line is connecting two labels placed at two endpoints. We move the endpoints slightly so that the line does not interfere with the label. In this case, the endpoint offsets are a pair of vectors, each of which moves an endpoint by the given vector in SVG units.  Another line in the figure shows a second use of offsets. In this case, the offsets are a single pair of SVG units. The direction of the line is preserved but each endpoint is moved along the line by the given offset. This could be helpful when drawing arrows since the arrow head will extend slightly beyond the endpoint of the line.       Vectors  In some sense, <vector> s are a redundant element since we can always draw lines and attach arrows. However, a goal of PreFigure is to facilitate authors thinking mathematically about the exposition so <vector> should be used when including a vector in a diagram. Vectors are also drawn with a default thickness that differentiates them from lines drawn with their default attributes.      A collection of vectors.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <grid-axes decorations=\"no\"\/> <vector v=\"(3,4)\"\/> <vector v=\"(1,3\/2)\" tail=\"(2,1)\" scale=\"2\" stroke=\"blue\"\/> <vector v=\"(1,3)\" tail=\"(3.5,1)\" head-location=\"0.8\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   In addition to stroke attributes, a vector supports the following attributes.  v  The attribute v is the 2-dimensional mathematical vector.   tail  The attribute tail represents the tail of the vector.   scale  The value of scale acts as scalar multiplication on v .   head-location  Usually, the head of a vector is placed at the tip of the vector. There may be occasions, however, when you want to place the head somewhere else along the shaft. Specifying head-location=\"0.8\" places the arrow head at a location 80% of the way from the tail to the tip.       Polygons  Polygons are paths drawn by connecting a set of points by line segments. The effect is different from drawing a set of line segments, however, since the ends of the line segments will be joined to form a whole. For example, the shape on the left of is drawn with two <line> s while that on the right is a <polygon> .      Two line segments on the left and a polygon on the right.   <polygon> s are quite versatile and should more properly be thought of as a polygonal path having both stroke and fill attributes. demonstrates some possibilities with the PreFigure soure given in .      Some sample polygons.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <polygon points=\"((-2,-1),(-4,-1),(-4,2))\" closed=\"yes\" fill=\"blue\"\/> <polygon points=\"(2,1)+2*(cos(k*pi\/4),sin(k*pi\/4))\" parameter=\"k=0..7\" closed=\"yes\" stroke=\"red\" thickness=\"4\"\/> <polygon points=\"((-4,4),(-1,4),(-1,-3),(3,-3))\" corner-radius=\"10\" arrows=\"1\" thickness=\"5\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A <polygon> requires a set of points given by the points attributes. While you may simply list the points, PreFigure also allows you to provide a rule for generating the list of points.  points  The value of the points attribute may be a list of points or a single point containing a named parameter.   parameter  The parameter attribute gives a range of values for generating the list of points. The format is parameter=\"parameter_name=start..stop\" .   closed  By default, polygons are not closed, but closed=\"yes\" will close a polygon.   arrows  To place arrows at the end of a polygonal path, use arrows=\"1\" to add an arrow at the end and arrows=\"2\" to also add an arrow at the beginning.   corner-radius  A polygonal path can be smoothed out using the corner-radius attribute. The value of this attribute should be a positive number of SVG units.      "
},
{
  "id": "diagram-points",
  "level": "2",
  "url": "sec-simple.html#diagram-points",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "    A collection of points.  "
},
{
  "id": "listing-points",
  "level": "2",
  "url": "sec-simple.html#listing-points",
  "type": "Listing",
  "number": "3.5.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0, 0,5, 5)\"> <point p=\"(1,4)\" size=\"20\" style=\"box\" fill=\"green\" stroke=\"black\" thickness=\"4\"\/> <point p=\"(2.5, 2.5)\" size=\"15\" style=\"diamond\" fill=\"blue\" stroke=\"none\"\/> <point p=\"(3,1)\" size=\"10\"> <m>(a,(f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-lines",
  "level": "2",
  "url": "sec-simple.html#diagram-lines",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": "    A collection of lines.  "
},
{
  "id": "listing-lines",
  "level": "2",
  "url": "sec-simple.html#listing-lines",
  "type": "Listing",
  "number": "3.5.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,5)\"> <grid\/> <line endpoints=\"((1,4), (4,4.5))\" stroke=\"blue\" thickness=\"5\" arrows=\"1\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" stroke=\"lightgray\" thickness=\"20\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" endpoint-offsets=\"(10, -5)\" thickness=\"5\"\/> <line endpoints=\"((1,1.5),(4,2))\" stroke=\"green\" infinite=\"yes\"\/> <definition>p1=(1,1)<\/definition> <definition>p2=(4.5,0.5)<\/definition> <line endpoints=\"(p1,p2)\" endpoint-offsets=\"((10,0), (-10,0))\"\/> <label p=\"p1\" clear-background=\"yes\"><m>a<\/m><\/label> <label p=\"p2\" clear-background=\"yes\"><m>b<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-vectors",
  "level": "2",
  "url": "sec-simple.html#diagram-vectors",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": "    A collection of vectors.  "
},
{
  "id": "listing-vectors",
  "level": "2",
  "url": "sec-simple.html#listing-vectors",
  "type": "Listing",
  "number": "3.5.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <grid-axes decorations=\"no\"\/> <vector v=\"(3,4)\"\/> <vector v=\"(1,3\/2)\" tail=\"(2,1)\" scale=\"2\" stroke=\"blue\"\/> <vector v=\"(1,3)\" tail=\"(3.5,1)\" head-location=\"0.8\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-polygon-v-line",
  "level": "2",
  "url": "sec-simple.html#diagram-polygon-v-line",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": "    Two line segments on the left and a polygon on the right.  "
},
{
  "id": "diagram-polygon",
  "level": "2",
  "url": "sec-simple.html#diagram-polygon",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": "    Some sample polygons.  "
},
{
  "id": "listing-polygon",
  "level": "2",
  "url": "sec-simple.html#listing-polygon",
  "type": "Listing",
  "number": "3.5.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <polygon points=\"((-2,-1),(-4,-1),(-4,2))\" closed=\"yes\" fill=\"blue\"\/> <polygon points=\"(2,1)+2*(cos(k*pi\/4),sin(k*pi\/4))\" parameter=\"k=0..7\" closed=\"yes\" stroke=\"red\" thickness=\"4\"\/> <polygon points=\"((-4,4),(-1,4),(-1,-3),(3,-3))\" corner-radius=\"10\" arrows=\"1\" thickness=\"5\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-circles",
  "level": "1",
  "url": "sec-circles.html",
  "type": "Section",
  "number": "3.6",
  "title": "Circles, ellipses, and rectangles",
  "body": " Circles, ellipses, and rectangles   This section demonstrates some PreFigure elements that generate circles, rectangles, and associated shapes.    Circles  Circles and ellipses are fairly simple. In addition to specifying the center and dimensions, there are only stroke and fill attributes. In contrast to polygons, these shapes are always closed.      A circle and ellipse.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(-5,0,5,6)\"> <grid\/> <circle center=\"(-2,3)\" radius=\"2\" fill=\"blue\" thickness=\"5\"\/> <ellipse center=\"(2,3)\" axes=\"(1,2)\" stroke=\"red\" rotate=\"pi\/6\" degrees=\"no\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   If an ellipse has the attribute axes=\"(a,b)\" , then the ellipse is a translate of . Notice that ellipse may be rotated with the rotate attribute.    Arcs  An <arc> represents a section of a circle and has stroke and fill attributes. There are a number of different ways to specify the arc, however, as seen in .      A collection of arcs.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <arc center=\"(-2,2)\" radius=\"2\" range=\"(270,45)\" arrows=\"1\" stroke=\"orange\" thickness=\"5\"\/> <definition>points=((4,-2),(1,-2),(3,2))<\/definition> <arc points=\"points\" radius=\"2\" sector=\"yes\" fill=\"lightgray\"\/> <polygon points=\"points\" stroke=\"black\"\/> <arc center=\"(-2,-3)\" radius=\"1\" range=\"(-2*pi\/3, 2*pi\/3)\" degrees=\"no\" stroke=\"blue\" thickness=\"5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   To define an arc, we need a center, a radius, and an angular extent. Every arc needs a radius attribute. There are two ways to specify the center and angular extent:  Use the center and range attributes. The degrees=\"no\" means that the value of range is expressed in radians.   If a list of three points are given in the points attribute, then the center of the circle is the second point in the list and the angular extent is defined by vectors from the center to the other two points.  Other attributes include  arrows  The possible values are arrows=\"0\", \"1\", \"2\" depending on whether the arc has no arrows, one arrow at the end of the angular extent, or two arrows on both ends.  sector  If sector=\"yes\" , then the sector is filled with the value of fill .      Angle markers  Angle markers are used to indicate angles between two line segments, such as two sides of a triangle.      A collection of angle marers.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <definition>points=((-2,1),(-4,2),(-1,4))<\/definition> <angle-marker points=\"points\" radius=\"20\" arrow=\"yes\"> <m>\\theta_1<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((5,4),(2,2),(4,1))<\/definition> <angle-marker points=\"points\" radius=\"20\"> <m>\\theta_2<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((3,-3),(-1,-4),(-3,0))<\/definition> <angle-marker points=\"points\" stroke=\"red\"\/> <angle-marker points=\"roll(points)\" stroke=\"red\"\/> <angle-marker points=\"roll(roll(points))\" stroke=\"red\"\/> <polygon points=\"points\" stroke=\"blue\" closed=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   An Angle marker is defined by a list of three points that define two line segments meeting at the center of the angle marker. The angle is defined in the counter-clockwise direction between the two sides.  points  The value of points must be a list of three points.  radius  The radius attribute defines the radius of the circular arc in SVG units. This is an optional attribute as PreFigure will determine a radius if one is not given. Smaller angles will have a larger radius.  arrow  An arrow can be added by declaring arrow=\"yes\" .  label  Notice that a label can be attached to an angle marker by enclosing the text within the <angle-marker> element. The positioning of the label will be determined by PreFigure, but alignment and offset attributes given to the <angle-marker> element will take precedence.    Notice the use of the roll operator which rolls the elements in a list: roll((a,b,c)) = (b,c,a) .    Rectangles  A rectangle is defined by specifying either its center or its lower-left corner as well as its dimensions. The corners can be rounded by setting the corner-radius attribute to the desired radius in SVG units.      Two rectangles.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <rectangle lower-left=\"(-4,0)\" dimensions=\"(4,3)\" fill=\"green\"\/> <rectangle center=\"(2,-2)\" dimensions=\"(2,4)\" stroke=\"blue\" thickness=\"5\" fill=\"white\" corner-radius=\"10\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-circle",
  "level": "2",
  "url": "sec-circles.html#diagram-circle",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": "    A circle and ellipse.  "
},
{
  "id": "listing-circle",
  "level": "2",
  "url": "sec-circles.html#listing-circle",
  "type": "Listing",
  "number": "3.6.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(-5,0,5,6)\"> <grid\/> <circle center=\"(-2,3)\" radius=\"2\" fill=\"blue\" thickness=\"5\"\/> <ellipse center=\"(2,3)\" axes=\"(1,2)\" stroke=\"red\" rotate=\"pi\/6\" degrees=\"no\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-arc",
  "level": "2",
  "url": "sec-circles.html#diagram-arc",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": "    A collection of arcs.  "
},
{
  "id": "listing-arc",
  "level": "2",
  "url": "sec-circles.html#listing-arc",
  "type": "Listing",
  "number": "3.6.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <arc center=\"(-2,2)\" radius=\"2\" range=\"(270,45)\" arrows=\"1\" stroke=\"orange\" thickness=\"5\"\/> <definition>points=((4,-2),(1,-2),(3,2))<\/definition> <arc points=\"points\" radius=\"2\" sector=\"yes\" fill=\"lightgray\"\/> <polygon points=\"points\" stroke=\"black\"\/> <arc center=\"(-2,-3)\" radius=\"1\" range=\"(-2*pi\/3, 2*pi\/3)\" degrees=\"no\" stroke=\"blue\" thickness=\"5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-angle-marker",
  "level": "2",
  "url": "sec-circles.html#diagram-angle-marker",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": "    A collection of angle marers.  "
},
{
  "id": "listing-angle-marker",
  "level": "2",
  "url": "sec-circles.html#listing-angle-marker",
  "type": "Listing",
  "number": "3.6.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <definition>points=((-2,1),(-4,2),(-1,4))<\/definition> <angle-marker points=\"points\" radius=\"20\" arrow=\"yes\"> <m>\\theta_1<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((5,4),(2,2),(4,1))<\/definition> <angle-marker points=\"points\" radius=\"20\"> <m>\\theta_2<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((3,-3),(-1,-4),(-3,0))<\/definition> <angle-marker points=\"points\" stroke=\"red\"\/> <angle-marker points=\"roll(points)\" stroke=\"red\"\/> <angle-marker points=\"roll(roll(points))\" stroke=\"red\"\/> <polygon points=\"points\" stroke=\"blue\" closed=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-rectangle",
  "level": "2",
  "url": "sec-circles.html#diagram-rectangle",
  "type": "Figure",
  "number": "3.6.7",
  "title": "",
  "body": "    Two rectangles.  "
},
{
  "id": "listing-rectangle",
  "level": "2",
  "url": "sec-circles.html#listing-rectangle",
  "type": "Listing",
  "number": "3.6.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <rectangle lower-left=\"(-4,0)\" dimensions=\"(4,3)\" fill=\"green\"\/> <rectangle center=\"(2,-2)\" dimensions=\"(2,4)\" stroke=\"blue\" thickness=\"5\" fill=\"white\" corner-radius=\"10\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-calculus",
  "level": "1",
  "url": "sec-calculus.html",
  "type": "Section",
  "number": "3.7",
  "title": "Calculus components",
  "body": " Calculus components   There is a collection of graphical components to facilitate diagrams that could appear in a calculus or precalculus course.    Graphs and tangent lines  To include the graph of a function, the function first needs to be defined inside a <definition> . By default, the domain of the function is assumed to be the horizontal extend of the current bounding box. The domain attribute can modify this, however.      The graphs of two functions.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <definition>g(s)=-sqrt(s+2)-1<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <graph function=\"g\" domain=\"(-2,5)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   By default, a graph is drawn by connecting N=\"100\" short line segments. You may sometimes need to increase N if the graph varies a lot.  Tangent lines are similar except a point attribute should be included to define the point at which the tangent line will appear. As with functions, the tangent line will be drawn across the length of the bounding box unless modified using the domain attribute.      A graph with tangent lines.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"-1.5\"\/> <tangent-line function=\"f\" point=\"1.5\" domain=\"(0,3)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .     Parametric curves  The <parametric-curve> tag includes the plot of a function defined parametrically.      Two parametric curves.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t)=3*(cos(t), sin(t)) + (cos(10*t),sin(10*t))<\/definition> <definition>g(t)=(t^2,t^3)<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <parametric-curve function=\"f\" domain=\"(0,2*pi)\" N=\"200\" closed=\"yes\"\/> <parametric-curve function=\"g\" domain=\"(-2,2)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that a parametric curves needs a domain attribute and may be closed with closed=\"yes\" . Some curves may require a larger value of N for a smoother appearence.    Implicit curves  The solutions to an equation can be plotted with the <implicit-curve> tag.      Two implicit curves defined by      <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x,y) = y^2 - x^3 + x<\/definition> <coordinates bbox=\"[-2,-2,2,2]\"> <grid-axes \/> <implicit-curve function=\"f\" k=\"-1\" stroke=\"orange\" \/> <implicit-curve function=\"f\" k=\"1\" stroke=\"orange\" \/> <\/coordinates> <\/diagram>   The PreFigure source for .   Two required attributes are function and k . The algorithm relies on breaking the current bounding box into smaller rectangles and looking for solutions to recursively. For some complicated functions, the algorithm may miss a component of the curve. In this case, set the attribute initial-depth to a value higher than its default of 4. If two components are incorrectly joined, increase the depth to which the algorithm may recurse by raising depth beyond its default of 8.    Areas  The area under a curve and between curves are drawn with <area-under-curve> and <area-between-curves> .       The area under a curve and between two curves     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=2*sqrt(x)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes \/> <area-under-curve function=\"f\" domain=\"(1,4)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=sqrt(x)<\/definition> <definition>g(x)=-2*atan(x)<\/definition> <coordinates bbox=\"[-1,-3,5,3]\"> <grid-axes \/> <area-between-curves function1=\"f\" function2=\"g\" domain=\"(1,3)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <graph function=\"g\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .   As with the other graphs we have seen in this section, the value of N can be increased to produce smoother graphs, in some cases.    Riemann sums  Finally, there is a <riemann-sum> element.      A Riemann sum     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x) = 2*log(x+2)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes\/> <riemann-sum function=\"f\" domain=\"(1,4)\" rule=\"right\" N=\"6\" fill=\"lawngreen\" stroke=\"black\" width=\"1\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .   The possible values for rule are rule=\"left\", \"right\", \"mid\" .   "
},
{
  "id": "diagram-graph",
  "level": "2",
  "url": "sec-calculus.html#diagram-graph",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": "    The graphs of two functions.  "
},
{
  "id": "listing-graph",
  "level": "2",
  "url": "sec-calculus.html#listing-graph",
  "type": "Listing",
  "number": "3.7.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <definition>g(s)=-sqrt(s+2)-1<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <graph function=\"g\" domain=\"(-2,5)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-tangent-line",
  "level": "2",
  "url": "sec-calculus.html#diagram-tangent-line",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": "    A graph with tangent lines.  "
},
{
  "id": "listing-tangent-line",
  "level": "2",
  "url": "sec-calculus.html#listing-tangent-line",
  "type": "Listing",
  "number": "3.7.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"-1.5\"\/> <tangent-line function=\"f\" point=\"1.5\" domain=\"(0,3)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-parametric",
  "level": "2",
  "url": "sec-calculus.html#diagram-parametric",
  "type": "Figure",
  "number": "3.7.5",
  "title": "",
  "body": "    Two parametric curves.  "
},
{
  "id": "listing-parametric",
  "level": "2",
  "url": "sec-calculus.html#listing-parametric",
  "type": "Listing",
  "number": "3.7.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t)=3*(cos(t), sin(t)) + (cos(10*t),sin(10*t))<\/definition> <definition>g(t)=(t^2,t^3)<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <parametric-curve function=\"f\" domain=\"(0,2*pi)\" N=\"200\" closed=\"yes\"\/> <parametric-curve function=\"g\" domain=\"(-2,2)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-implicit-curve",
  "level": "2",
  "url": "sec-calculus.html#diagram-implicit-curve",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": "    Two implicit curves defined by   "
},
{
  "id": "listing-implicit-curve",
  "level": "2",
  "url": "sec-calculus.html#listing-implicit-curve",
  "type": "Listing",
  "number": "3.7.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x,y) = y^2 - x^3 + x<\/definition> <coordinates bbox=\"[-2,-2,2,2]\"> <grid-axes \/> <implicit-curve function=\"f\" k=\"-1\" stroke=\"orange\" \/> <implicit-curve function=\"f\" k=\"1\" stroke=\"orange\" \/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-area",
  "level": "2",
  "url": "sec-calculus.html#diagram-area",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": "     The area under a curve and between two curves  "
},
{
  "id": "listing-area",
  "level": "2",
  "url": "sec-calculus.html#listing-area",
  "type": "Listing",
  "number": "3.7.10",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=2*sqrt(x)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes \/> <area-under-curve function=\"f\" domain=\"(1,4)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=sqrt(x)<\/definition> <definition>g(x)=-2*atan(x)<\/definition> <coordinates bbox=\"[-1,-3,5,3]\"> <grid-axes \/> <area-between-curves function1=\"f\" function2=\"g\" domain=\"(1,3)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <graph function=\"g\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .  "
},
{
  "id": "diagram-riemann-sum",
  "level": "2",
  "url": "sec-calculus.html#diagram-riemann-sum",
  "type": "Figure",
  "number": "3.7.11",
  "title": "",
  "body": "    A Riemann sum  "
},
{
  "id": "listing-riemann-sum",
  "level": "2",
  "url": "sec-calculus.html#listing-riemann-sum",
  "type": "Listing",
  "number": "3.7.12",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x) = 2*log(x+2)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes\/> <riemann-sum function=\"f\" domain=\"(1,4)\" rule=\"right\" N=\"6\" fill=\"lawngreen\" stroke=\"black\" width=\"1\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .  "
},
{
  "id": "sec-diffeqs",
  "level": "1",
  "url": "sec-diffeqs.html",
  "type": "Section",
  "number": "3.8",
  "title": "Differential equations",
  "body": " Differential equations   There are a few elements for creating diagrams containing solutions to differential equations.    Slope Fields  Slope fields for a 1-variable ordinary differential equation and for autonomous systems can be drawn using the <slope-field> element. On the left of is shown a slope field for the equation while the right shows the slope field for the autonomous system        The slope fields for two differential equations.   The PreFigure source input for the left diagram in is given in .    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of a 1-variable differential equation   The grid on which the slope field is drawn can be changed using the spacings attribute similar to that of the grid element .  To obtain the slope field for an autonomous system, include the attribute system=\"yes\" in the <slope-field> element. Notice that the function defining the differential equation is naturally vector-valued now.    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of an autonomous sytem.     Solutions to differential equations  PreFigure provides an element <de-solve> that generates and saves the solution of a differential equation. You could think of this as a definition that can be reused possibly several times.  Solutions are then plotted using the <plot-de-solution> element. demonstrates how to use these elements.      Some solutions to a differential equation.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes\/> <slope-field function=\"f\"\/> <de-solve function=\"f\" t0=\"0\" y0=\"3\" t1=\"4\" name=\"linear\"\/> <plot-de-solution solution=\"linear\" stroke=\"red\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"-2\" t1=\"4\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   shows two ways in which a solution to the differential equation can be plotted. In Line 5, we solve the differential equation with initial value over the interval . This interval is broken into N=100 steps by default, but this value can be modified using the N attribute. This solution is also given an attribute name=\"linear\" . To plot the solution, we use a <plot-de-solution> element in Line 7 passing the name of the solution as an attribute.  Alernatively, these two elements can be combined into a single <plot-de-solution> element, as shown in Line 8. Most likely, you will use this second method more frequently since it involves a single element.  There are more possibilities when solving a system. shows a solution to a autonomous system.      Solutions and to a system of differential equations.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-1,-4,6,4]\"> <grid-axes\/> <de-solve function=\"f\" t0=\"0\" t1=\"6\" y0=\"(3,0)\" name=\"oscillator\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y0)\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice how we generate a solution in Line 5 of and save it with the name=\"oscillator\" . Then we reuse this solution to plot the components and as functions of in Line 6 and 7. There are now three quantities involved, , , and , so we use the axes attribute to state which of these quantities will appear on the horizontal and vertical axis. This notation for the axes holds no matter what variables are used to define the function on the right side of the differential equation.  We can also create phase portraits as in .      A few trajectories in the phase plane of an autonomous system.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" stroke=\"darkorange\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(1,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(2,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(3,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-slope-field",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-slope-field",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": "     The slope fields for two differential equations.  "
},
{
  "id": "listing-slope-field",
  "level": "2",
  "url": "sec-diffeqs.html#listing-slope-field",
  "type": "Listing",
  "number": "3.8.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of a 1-variable differential equation  "
},
{
  "id": "listing-slope-field-2",
  "level": "2",
  "url": "sec-diffeqs.html#listing-slope-field-2",
  "type": "Listing",
  "number": "3.8.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of an autonomous sytem.  "
},
{
  "id": "diagram-de-plot",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-plot",
  "type": "Figure",
  "number": "3.8.4",
  "title": "",
  "body": "    Some solutions to a differential equation.  "
},
{
  "id": "listing-de-plot",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-plot",
  "type": "Listing",
  "number": "3.8.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes\/> <slope-field function=\"f\"\/> <de-solve function=\"f\" t0=\"0\" y0=\"3\" t1=\"4\" name=\"linear\"\/> <plot-de-solution solution=\"linear\" stroke=\"red\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"-2\" t1=\"4\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-de-plot-2",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-plot-2",
  "type": "Figure",
  "number": "3.8.6",
  "title": "",
  "body": "    Solutions and to a system of differential equations.  "
},
{
  "id": "listing-de-plot-2",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-plot-2",
  "type": "Listing",
  "number": "3.8.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-1,-4,6,4]\"> <grid-axes\/> <de-solve function=\"f\" t0=\"0\" t1=\"6\" y0=\"(3,0)\" name=\"oscillator\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y0)\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-de-phase",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-phase",
  "type": "Figure",
  "number": "3.8.8",
  "title": "",
  "body": "    A few trajectories in the phase plane of an autonomous system.  "
},
{
  "id": "listing-de-phase",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-phase",
  "type": "Listing",
  "number": "3.8.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" stroke=\"darkorange\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(1,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(2,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"(3,0)\" t1=\"2*pi\" axes=\"(y0,y1)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This work was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
