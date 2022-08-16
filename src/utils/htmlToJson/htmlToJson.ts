//@ts-ignore
import { parse } from "himalaya";

const HtmlToJson = async (data: any) => {
  let d = parse(data);
  let list = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].tagName === "ol" || d[i].tagName === "ul") {
      let ij = await addObject(
        [],
        d[i].tagName,
        d[i].children,
        true,
        d[i].attributes.find((att: any) => att.key === "class") !== undefined
          ? true
          : false,
        d[i].attributes.find((att: any) => att.key === "class") !== undefined
          ? d[i].attributes
              .find((att: any) => att.key === "class")
              .value.substring(9)
          : "left",
        d[i].tagName === "a" ? true : false,
        d[i].tagName === "a" ? d[i].attributes[0].value : null,
        d[i].tagName === "strong" ? true : false,
        d[i].tagName === "u" ? true : false,
        d[i].tagName === "em" ? true : false,
        d[i].tagName === "s" ? true : false,
        d[i].tagName === "h1" || d[i].tagName === "h2" || d[i].tagName === "h3"
          ? true
          : false,
        d[i].tagName === "h1"
          ? 32
          : d[i].tagName === "h2"
          ? 24
          : d[i].tagName === "h3"
          ? 18.72
          : d[i].tagName === "h4"
          ? 16
          : 14,
        d[i].tagName === "sup" ? true : false,
        d[i].tagName === "sub" ? true : false
      );
      await list.push({
        newLine: true,
        type: "list",
        listIndicator: d[i].tagName === "ol" ? "number" : "dot",
        items: ij,
      });
    } else if (d[i].tagName === "iframe") {
      await list.push({
        newLine: true,
        type: "video",
        value: d[i].attributes.find((att: any) => att.key === "src").value,
      });
    } else {
      let ij = await addObject(
        [],
        d[i].tagName,
        d[i].children,
        true,
        d[i].attributes.find((att: any) => att.key === "class") !== undefined
          ? true
          : false,
        d[i].attributes.find((att: any) => att.key === "class") !== undefined
          ? d[i].attributes
              .find((att: any) => att.key === "class")
              .value.substring(9)
          : "left",
        d[i].tagName === "a" ? true : false,
        d[i].tagName === "a" ? d[i].attributes[0].value : null,
        d[i].tagName === "strong" ? true : false,
        d[i].tagName === "u" ? true : false,
        d[i].tagName === "em" ? true : false,
        d[i].tagName === "s" ? true : false,
        d[i].tagName === "h1" || d[i].tagName === "h2" || d[i].tagName === "h3"
          ? true
          : false,
        d[i].tagName === "h1"
          ? 32
          : d[i].tagName === "h2"
          ? 24
          : d[i].tagName === "h3"
          ? 18.72
          : d[i].tagName === "h4"
          ? 16
          : 14,
        d[i].tagName === "sup" ? true : false,
        d[i].tagName === "sub" ? true : false
      );
      for (let j = 0; j < (await ij).length; j++) {
        await list.push(ij[j]);
      }
    }
  }
  return list;
};

const addObject = async (
  l: any,
  tagName: string,
  data: any,
  newLine: any,
  isAlign: boolean,
  align: string,
  link: any,
  href: any,
  bold = false,
  underline = false,
  italic = false,
  strikethrought = false,
  isSize = false,
  size: number,
  sup = false,
  sub = false
) => {
  let li = [...l];
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "text") {
      if (link) {
        li.push({
          newLine: i === 0 && newLine ? true : false,
          type: "link",
          bold: bold,
          underline: underline,
          italic: italic,
          strikethrought: strikethrought,
          value: data[i].content,
          href: href,
          size: size,
          align: align,
          sup: sup,
          sub: sub,
        });
      } else {
        li.push({
          newLine: i === 0 && newLine ? true : false,
          type: "text",
          bold: bold,
          underline: underline,
          italic: italic,
          strikethrought: strikethrought,
          value: data[i].content,
          size: size,
          align: align,
          sup: sup,
          sub: sub,
        });
      }
    } else {
      if (data[i].tagName === "img") {
        let s = data[i].attributes
          .find((att: any) => (att.key === "src" ? true : false))
          .value.split("/");
        let url = "";
        let index = s.length;
        for (let j = 0; j < s.length; j++) {
          if (s[j] === "img") {
            index = j;
          }
          if (index <= j) {
            url += "/" + s[j];
          }
        }
        li.push({
          newLine: i === 0 && newLine ? true : false,
          type: "img",
          value: url,
        });
      } else if (data[i].tagName === "iframe") {
        li.push({
          newLine: i === 0 && newLine ? true : false,
          type: "video",
          value: data[i].attributes.find((att: any) => att.key === "src").value,
        });
      } else {
        let ij = await addObject(
          l,
          data[i].tagName,
          data[i].children,
          tagName === "ul" || tagName === "ol" || (i === 0 && newLine)
            ? true
            : false,
          isAlign
            ? isAlign
            : data[i].attributes.find((att: any) => att.key === "class") !==
              undefined
            ? true
            : false,
          isAlign
            ? align
            : data[i].attributes.find((att: any) => att.key === "class") !==
              undefined
            ? data[i].attributes
                .find((att: any) => att.key === "class")
                .value.substring(9)
            : "left",
          link ? link : data[i].tagName === "a" ? true : false,
          link
            ? href
            : data[i].tagName === "a"
            ? data[i].attributes[0].value
            : null,
          bold ? bold : data[i].tagName === "strong" ? true : false,
          underline ? underline : data[i].tagName === "u" ? true : false,
          italic ? italic : data[i].tagName === "em" ? true : false,
          strikethrought
            ? strikethrought
            : data[i].tagName === "s"
            ? true
            : false,
          isSize
            ? isSize
            : data[i].tagName === "h1" ||
              data[i].tagName === "h2" ||
              data[i].tagName === "h3"
            ? true
            : false,
          isSize
            ? size
            : data[i].tagName === "h1"
            ? 32
            : data[i].tagName === "h2"
            ? 24
            : data[i].tagName === "h3"
            ? 18.72
            : 14,
          sup ? sup : data[i].tagName === "sup" ? true : false,
          sub ? sub : data[i].tagName === "sub" ? true : false
        );
        for (let j = 0; j < ij.length; j++) {
          li.push(ij[j]);
        }
      }
    }
  }
  return li;
};

export default HtmlToJson;
