using DemoBlogAppApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoBlogAppApi.Utils;

namespace DemoBlogAppApi.Services
{
    public class PostService
    {
        private List<Post> posts;
        private int nextId;

        public PostService()
        {
            posts = SeedData.ValidPosts;
            nextId = SeedData.ValidPosts.Count + 1;
        }

        public async Task CreatePost(Post post)
        {
            post.Id = nextId++;
            await Task.Run(() => posts.Add(post));
        }

        public async Task<List<Post>> GetAllPosts()
        {
            return await Task.FromResult(posts);
        }

        public async Task<Post> GetPost(long id)
        {
            return await Task.FromResult(posts.FirstOrDefault(p => p.Id == id));
        }
        public async Task UpdatePost(Post post)
        {
            var index = posts.FindIndex(p => p.Id == post.Id);
            await Task.Run(() => posts[index] = post);
        }

    }
}