import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Github = () => {
  const githubUsername = 'ZulkaifAhmad';

  const fetchGithubData = async () => {
    const [profileRes, reposRes] = await Promise.all([
      axios.get(`https://api.github.com/users/${githubUsername}`),
      axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`)
    ]);
    
    return {
      profile: profileRes.data,
      repos: reposRes.data
    };
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['github', githubUsername],
    queryFn: fetchGithubData,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-50 rounded-lg">
        <p className="font-semibold text-lg">Failed to load GitHub data</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  const { profile, repos } = data;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
        <img 
          src={profile?.avatar_url} 
          alt={profile?.name} 
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {profile?.name || githubUsername}
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl">{profile?.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm border border-blue-100">
              <span className="font-bold">{profile?.public_repos}</span> Repositories
            </div>
            <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-medium text-sm border border-emerald-100">
              <span className="font-bold">{profile?.followers}</span> Followers
            </div>
            <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg font-medium text-sm border border-purple-100">
              <span className="font-bold">{profile?.following}</span> Following
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
        <a 
          href={`https://github.com/${githubUsername}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View all →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-200 border border-gray-100 flex flex-col h-full hover:border-blue-200"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors break-words line-clamp-1">
                {repo.name}
              </h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                {repo.visibility}
              </span>
            </div>
            <p className="text-gray-500 mb-6 flex-grow text-sm line-clamp-3">
              {repo.description || "No description provided for this repository."}
            </p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
              <div className="flex items-center text-sm font-medium text-gray-600">
                <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                {repo.language || "N/A"}
              </div>
              <div className="flex items-center text-sm font-medium text-gray-600">
                <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {repo.stargazers_count}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Github;