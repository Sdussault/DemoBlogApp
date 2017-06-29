using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using DemoBlogAppApi.Models;
using DemoBlogAppApi.Services;

namespace DemoBlogAppApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class BlogController : ApiController
    {
        private PostService postService;

        public BlogController()
        {
            postService = new PostService();
        }

        [HttpPost]
        [Route("rest/api/v1/posts")]
        public async Task CreatePost(Post post)
        {
            await postService.CreatePost(post);
        }

        [HttpGet]
        [Route("rest/api/v1/posts/{id}")]
        public async Task<Post> GetPost(long id)
        {
            return await postService.GetPost(id);
        }

        [HttpGet]
        [Route("rest/api/v1/posts")]
        public async Task<List<Post>> GetAllPosts()
        {
            return await postService.GetAllPosts();
        }
    }
}
