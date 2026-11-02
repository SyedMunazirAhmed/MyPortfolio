package dev.portfolio.server.project;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository repository;

    // Constructor injection: Spring passes in the repository bean
    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public List<ProjectResponse> findAll() {
        return repository.findAll().stream().map(ProjectResponse::from).toList();
    }
}
