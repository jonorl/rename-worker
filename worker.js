export default {

  async fetch(request) {

    const url = new URL(request.url);


    const routes = {

      '/fugazzeta': 'https://fugazzeta.pages.dev',

      '/voice-clone': 'https://voice-clone-pepe.pages.dev',

      '/simpsons-gpt': 'https://simpsons-gpt.pages.dev',

      '/agentic-ai-news-to-image': 'https://agentic-ai-news-to-image.pages.dev',

      '/odin-book': 'https://odin-book.pages.dev/',

      '/messaging-app': 'https://messaging-app-5ww.pages.dev/',

      '/blog': 'https://blog-api-f4h.pages.dev/',

      '/blog-cms': 'https://blog-api-cms.pages.dev/',

      '/game': 'https://wheres-bluey.pages.dev/',

    };


    // Enforce trailing slash on root project paths

    if (routes[url.pathname]) {

      return Response.redirect(`${url.origin}${url.pathname}/`, 301);

    }


    // Proxy to projects

    for (const [path, origin] of Object.entries(routes)) {

      if (url.pathname.startsWith(path + '/')) {

        const newPath = url.pathname.replace(path, '');

        const newUrl = `${origin}${newPath}${url.search}`;

        return fetch(newUrl, { headers: request.headers });

      }

    }


    // Fallback to portfolio

    return fetch(`https://jonathan-orlowski.pages.dev${url.pathname}${url.search}`, {

      headers: request.headers,

    });

  }

};
