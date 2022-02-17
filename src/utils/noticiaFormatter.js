const noticiaFormatter = noticia => {
  return noticia
    .replace('<h2>', '<h2 style="font-size:65px">')
    .replace('<p><strong>', '<p<strong>style=font-size:50px">');
};

export default noticiaFormatter;
