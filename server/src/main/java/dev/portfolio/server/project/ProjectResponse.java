package dev.portfolio.server.project;

import java.util.List;

/** DTO: the shape of a project in the JSON API (keeps the JPA entity out of the HTTP layer). */
public record ProjectResponse(
        Long id,
        String title,
        String description,
        List<String> tags,
        String repoUrl,
        String liveUrl) {

    public static ProjectResponse from(Project project) {
        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                List.copyOf(project.getTags()),
                project.getRepoUrl(),
                project.getLiveUrl());
    }
}
