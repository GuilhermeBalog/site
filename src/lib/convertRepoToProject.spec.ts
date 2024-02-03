import { describe, it } from 'node:test';
import assert from 'node:assert';

import { convertRepoToProject } from './convertRepoToProject.js';
import { Repository } from './github.js';

describe('convertRepoToProject()', () => {
  const sampleRepo: Repository = {
    name: 'sample-repo',
    description: 'Lorem ipsum dolor',
    languages: {
      nodes: [
        { name: 'JavaScript' },
        { name: 'HTML' },
      ],
    },
    homepageUrl: 'https://user.github.io/sample-repo',
    url: 'https://github.com/user/sample-repo',
    openGraphImageUrl: '',
  }

  it('should convert a github repository to the project format', () => {
    const project = convertRepoToProject(sampleRepo);

    const expectedProject = {
      emoji: '',
      name: 'sample-repo',
      description: 'Lorem ipsum dolor',
      languages: [
        { name: 'JavaScript' },
        { name: 'HTML' },
      ],
      homepage: 'https://user.github.io/sample-repo',
      repo_url: 'https://github.com/user/sample-repo',
      image: '',
    }

    assert.deepStrictEqual(project, expectedProject)
  })

  it('should keep the image if it is a custom image', () => {
    const imageUrl = 'https://repository-images.githubusercontent.com/233632341/557d0a09-5ffc-470b-aa8d-0795a0c4daa6';

    const repo = {
      ...sampleRepo,
      openGraphImageUrl: imageUrl
    };

    const project = convertRepoToProject(repo);

    assert.strictEqual(project.image, imageUrl);
  });

  it('should remove the image if it is a default image', () => {
    const imageUrl = 'https://lorem-ipsum.com';

    const repo = {
      ...sampleRepo,
      openGraphImageUrl: imageUrl
    };

    const project = convertRepoToProject(repo);

    assert.strictEqual(project.image, '');
  });

  it('should set image to empty if there is no image', () => {
    const project = convertRepoToProject(sampleRepo);

    assert.strictEqual(project.image, '');
  })

  it('should extract the emoji from the description', () => {
    const emoji = '✌🏾';
    const textDescription = 'Lorem ipsum dolor';
    const description = `${emoji} ${textDescription}`;

    const repo = { ...sampleRepo, description };

    const project = convertRepoToProject(repo);

    assert.strictEqual(project.emoji, emoji);
    assert.strictEqual(project.description, textDescription);
  });

  it('should keep the description if it does not have an emoji', () => {
    const project = convertRepoToProject(sampleRepo);

    const expectedDescription = 'Lorem ipsum dolor'

    assert.strictEqual(project.emoji, '');
    assert.strictEqual(project.description, expectedDescription);
  });
});
